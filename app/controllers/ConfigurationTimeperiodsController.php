<?php

require dirname(__FILE__)."/../utils/config.inc.php";

class ConfigurationTimeperiodsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /configurationtimeperiods
	 *
	 * @return Response
	 */
	public function index()
	{
		$timeperiods = $this->getList();

		return Response::json($timeperiods);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /configurationtimeperiods/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /configurationtimeperiods
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$v4uuid = UUID::v4();

		Object::create(array(
			"uuid" => $v4uuid,
			"object_type" => "9",
			"first_name" => $input["timeperiod_name"],
			"is_active" => "1"
		));

		Timeperiod::create(array(
			"object_uuid" => $v4uuid,
			"alias" => $input["alias"]
		));

		foreach ($input as $k => $v) {
			if (is_array($v)) {
				$foo3 = "";
				if (!empty($v['foo3'])) {
					$foo3 = " ".$v['foo3']['value'];
				}
				$key = $v['foo1']['value']." ".$v['foo2']['value'].$foo3;
				$value = $v['bar1']['value'].":".$v['bar2']['value']."-".$v['bar3']['value'].":".$v['bar4']['value'];

				TimeperiodDetail::create(array(
					"timeperiod_fk" => $v4uuid,
					"key" => $key,
					"value" => $value
				));
			} else {
				TimeperiodDetail::create(array(
					"timeperiod_fk" => $v4uuid,
					"key" => $k,
					"value" => $v
				));
			}
		}

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	/**
	 * Display the specified resource.
	 * GET /configurationtimeperiods/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /configurationtimeperiods/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /configurationtimeperiods/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /configurationtimeperiods/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

	private function getList()
	{
		$query = DB::table("timeperiods")
				->join("objects", "timeperiods.object_uuid", "=", "objects.uuid")
				->select("timeperiods.id", "timeperiods.object_uuid", "objects.first_name as timeperiod_name")
				->orderBy("timeperiods.created_at", "desc");

		return $query->get();
	}

	private function writeConfig()
	{
		global $config;

		$file = $config["NAGIOS_OBJECTS_DIR"].$config["NAGIOS_TIMEPERIODS_CFG"];
		$timeperiod_details = DB::table("timeperiod_details")->get();
		$contents = "";
		$objects = array();

		if (file_exists($file)) {
			unlink($file);
		}

		foreach ($timeperiod_details as $timeperiod)
		{
			$timeperiod_fk = $timeperiod->timeperiod_fk;
			$object = array();
			if (array_key_exists($timeperiod_fk, $objects)) $object = $objects[$timeperiod_fk];

			$object[$timeperiod->key] = $timeperiod->value;
			$objects[$timeperiod_fk] = $object;
		}

		foreach (array_keys($objects) as $timeperiod_fk)
		{
			$object = $objects[$timeperiod_fk];
			$contents .= $config["NAGIOS_DEFINE_TIMEPERIOD"]."{\n";
			
			foreach (array_keys($object) as $key)
			{
				$contents .= "\t".$key."\t".$object[$key]."\n";
			}
			$contents .= "}\n\n";
		}

		file_put_contents($file, $contents, FILE_APPEND | LOCK_EX);
	}

}