<?php

require dirname(__FILE__)."/../utils/config.inc.php";
require dirname(__FILE__)."/../utils/nagios.objects.php";
require dirname(__FILE__)."/../utils/UUID.php";

class ConfigurationServicesController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /configurationservices
	 *
	 * @return Response
	 */
	public function index()
	{
		$services = $this->getList();

		return Response::json($services);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /configurationservices/create
	 *
	 * @return Response
	 */
	public function create()
	{
		$nagiosService = NagiosObjects::service();
		$use = array();
		$disuse = array();

		foreach ($nagiosService as $nagiosProp) {
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
	 * POST /configurationservices
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$v4uuid = UUID::v4();

		Object::create(array(
			"uuid" => $v4uuid,
			"object_type" => "2",
			"first_name" => $input["host_name"],
			"second_name" => $input["service_description"],
			"is_active" => "1"
		));

		Service::create(array(
			"object_uuid" => $v4uuid,
			"host_fk" => "",
			"command_fk" => ""
		));

		foreach ($input as $key => $value) {
			ServiceDetail::create(array(
				"service_fk" => $v4uuid,
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
	 * GET /configurationservices/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$serviceDetail = DB::table("services")
				->join("objects", "services.object_uuid", "=", "objects.uuid")
				->join("service_details", "services.object_uuid", "=", "service_details.service_fk")
				->select("service_details.key", "service_details.value")
				->where("services.id", "=", $id)
				->orderBy("service_details.id", "asc")
				->get();

		$nagiosService = NagiosObjects::service();
		$keys = array();
		$serviceData = array();
		$use = array();
		$disuse = array();

		foreach ($serviceDetail as $prop) {
			array_push($keys, $prop->key);
			$serviceData[$prop->key] = $prop->value;
		}
		foreach ($nagiosService as $nagiosProp) {
			if (in_array($nagiosProp["name"], $keys)) array_push($use, $nagiosProp);
			else array_push($disuse, $nagiosProp);
		}

		$result = array(
			"serviceData" => $serviceData,
			"serviceDetail" => $serviceDetail,
			"use" => $use,
			"disuse" => $disuse
		);

		return Response::json($result);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /configurationservices/{id}/edit
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
	 * PUT /configurationservices/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		global $config;

		$input = Input::all();
		$result = DB::table("services")->select("object_uuid")->where("id", "=", $id)->get();
		$object_uuid = $result[0]->object_uuid;

		ServiceDetail::where("service_fk", "=", $object_uuid)->delete();

		foreach ($input as $key => $value) {
			ServiceDetail::create(array(
				"service_fk" => $object_uuid,
				"key" => $key,
				"value" => $value
			));
		}

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /configurationservices/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$result = DB::table("services")
				->select("object_uuid")
				->where("id", "=", $id)
				->get();
		$object_uuid = $result[0]->object_uuid;

		DB::table("service_details")->where("service_fk", "=", $object_uuid)->delete();
		DB::table("services")->where("id", "=", $id)->delete();
		DB::table("objects")->where("uuid", "=", $object_uuid)->delete();

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	private function getList()
	{
		$query = DB::table("services")
				->join("objects", "services.object_uuid", "=", "objects.uuid")
				->select("services.id", "services.object_uuid", "services.host_fk", "services.description", "objects.first_name as host_name")
				->orderBy("services.created_at", "desc");
		if (Input::has("host_fk")) $query->where("host_fk", "=", Input::get("host_fk"));
		return $query->get();
	}

	private function writeConfig()
	{
		global $config;

		$file = $config["NAGIOS_OBJECTS_DIR"].$config["NAGIOS_SERVICES_CFG"];
		$services = DB::table("service_details")->get();
		$contents = "";
		$objects = array();

		if (file_exists($file)) {
			unlink($file);
		}

		foreach ($services as $service)
		{
			$service_fk = $service->service_fk;
			$object = array();
			if (array_key_exists($service_fk, $objects)) $object = $objects[$service_fk];

			$object[$service->key] = $service->value;
			$objects[$service_fk] = $object;
		}

		foreach (array_keys($objects) as $service_fk)
		{
			$object = $objects[$service_fk];
			$contents .= $config["NAGIOS_DEFINE_SERVICE"]."{\n";
			
			foreach (array_keys($object) as $key)
			{
				$contents .= "\t".$key."\t".$object[$key]."\n";
			}
			$contents .= "}\n\n";
		}

		file_put_contents($file, $contents, FILE_APPEND | LOCK_EX);
	}

}