<?php

require dirname(__FILE__)."/../utils/config.inc.php";
require dirname(__FILE__)."/../utils/nagios.objects.php";
require dirname(__FILE__)."/../utils/UUID.php";

class ConfigurationHostsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /configurationhosts
	 *
	 * @return Response
	 */
	public function index()
	{
		$hosts = $this->getList();

		return Response::json($hosts);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /configurationhosts/create
	 *
	 * @return Response
	 */
	public function create()
	{
		$nagiosHost = NagiosObjects::host();
		$use = array();
		$disuse = array();

		foreach ($nagiosHost as $nagiosProp) {
			if ($nagiosProp["required"] == "Y") array_push($use, $nagiosProp);
			else array_push($disuse, $nagiosProp);
		}

		$result = array(
			"use" => $use,
			"disuse" => $disuse
		);

		return Response::json($result);
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /configurationhosts
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$v4uuid = UUID::v4();

		Object::create(array(
			"uuid" => $v4uuid,
			"object_type" => "1",
			"first_name" => $input["host_name"],
			"is_active" => "1"
		));

		Host::create(array(
			"object_uuid" => $v4uuid
		));

		foreach ($input as $key => $value) {
			HostDetail::create(array(
				"host_fk" => $v4uuid,
				"key" => $key,
				"value" => $value
			));
		}

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	/**
	 * Display the specified resource.
	 * GET /configurationhosts/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$hostDetail = DB::table("hosts")
				->join("objects", "hosts.object_uuid", "=", "objects.uuid")
				->join("host_details", "hosts.object_uuid", "=", "host_details.host_fk")
				->select("host_details.key", "host_details.value")
				->where("hosts.id", "=", $id)
				->orderBy("host_details.id", "asc")
				->get();

		$nagiosHost = NagiosObjects::host();
		$keys = array();
		$hostData = array();
		$use = array();
		$disuse = array();

		foreach ($hostDetail as $prop) {
			array_push($keys, $prop->key);
			$hostData[$prop->key] = $prop->value;
		}
		foreach ($nagiosHost as $nagiosProp) {
			if (in_array($nagiosProp["name"], $keys)) array_push($use, $nagiosProp);
			else array_push($disuse, $nagiosProp);
		}

		$result = array(
			"hostData" => $hostData,
			"hostDetail" => $hostDetail,
			"use" => $use,
			"disuse" => $disuse
		);

		return Response::json($result);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /configurationhosts/{id}/edit
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
	 * PUT /configurationhosts/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		global $config;

		$input = Input::all();
		$result = DB::table("hosts")->select("object_uuid")->where("id", "=", $id)->get();
		$object_uuid = $result[0]->object_uuid;

		HostDetail::where("host_fk", "=", $object_uuid)->delete();

		foreach ($input as $key => $value) {
			HostDetail::create(array(
				"host_fk" => $object_uuid,
				"key" => $key,
				"value" => $value
			));

			if (strcmp($key, "host_name") === 0)
				Object::where("uuid", "=", $object_uuid)->update(array("first_name" => $value));
		}

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /configurationhosts/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$result = DB::table("hosts")
				->select("object_uuid")
				->where("id", "=", $id)
				->get();
		$object_uuid = $result[0]->object_uuid;

		DB::table("host_details")->where("host_fk", "=", $object_uuid)->delete();
		DB::table("hosts")->where("id", "=", $id)->delete();
		DB::table("objects")->where("uuid", "=", $object_uuid)->delete();

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	private function getList()
	{
		$query = DB::table("hosts")
				->join("objects", "hosts.object_uuid", "=", "objects.uuid")
				->select("hosts.id", "hosts.object_uuid", "objects.first_name as host_name")
				->orderBy("hosts.created_at", "desc");
		if (Input::has("object_uuid")) $query->where("object_uuid", "=", Input::get("object_uuid"));
		return $query->get();
	}

	private function writeConfig()
	{
		global $config;

		$file = $config["NAGIOS_OBJECTS_DIR"].$config["NAGIOS_HOSTS_CFG"];
		$hosts = DB::table("host_details")->get();
		$contents = "";
		$objects = array();

		if (file_exists($file)) {
			unlink($file);
		}

		foreach ($hosts as $host)
		{
			$host_fk = $host->host_fk;
			$object = array();
			if (array_key_exists($host_fk, $objects)) $object = $objects[$host_fk];

			$object[$host->key] = $host->value;
			$objects[$host_fk] = $object;
		}

		foreach (array_keys($objects) as $host_fk)
		{
			$object = $objects[$host_fk];
			$contents .= $config["NAGIOS_DEFINE_HOST"]."{\n";
			
			foreach (array_keys($object) as $key)
			{
				$contents .= "\t".$key."\t".$object[$key]."\n";
			}
			$contents .= "}\n\n";
		}

		file_put_contents($file, $contents, FILE_APPEND | LOCK_EX);
	}

}