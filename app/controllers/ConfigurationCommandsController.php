<?php

require dirname(__FILE__)."/../utils/config.inc.php";
require dirname(__FILE__)."/../utils/UUID.php";

class ConfigurationCommandsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /configurationcommands
	 *
	 * @return Response
	 */
	public function index()
	{
		$commands = $this->getList();

		return Response::json($commands);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /configurationcommands/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /configurationcommands
	 *
	 * @return Response
	 */
	public function store()
	{
		$command_name = Input::get("command_name");
		$command_line = Input::get("command_line");
		$v4uuid = UUID::v4();

		Object::create(array(
			"uuid" => $v4uuid,
			"object_type" => "12",
			"first_name" => $command_name,
			"is_active" => "1"
		));

		Command::create(array(
			"object_uuid" => $v4uuid,
			"command_line" => $command_line
		));

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	/**
	 * Display the specified resource.
	 * GET /configurationcommands/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$command = DB::table("commands")
				->join("objects", "commands.object_uuid", "=", "objects.uuid")
				->select("commands.id", "objects.first_name as command_name", "commands.command_line")
				->where("commands.id", "=", $id)
				->get();

		return Response::json($command);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /configurationcommands/{id}/edit
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
	 * PUT /configurationcommands/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$command_name = Input::get("command_name");
		$command_line = Input::get("command_line");
		$result = DB::table("commands")
				->select("object_uuid")
				->where("id", "=", $id)
				->get();
		$uuid = $result[0]->object_uuid;

		DB::table("objects")
			->where("uuid", "=", $uuid)
			->update(array("first_name" => $command_name));
		DB::table("commands")
			->where("id", "=", $id)
			->update(array("command_line" => $command_line));

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /configurationcommands/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$result = DB::table("commands")
				->select("object_uuid")
				->where("id", "=", $id)
				->get();
		$object_uuid = $result[0]->object_uuid;

		DB::table("commands")->where("id", "=", $id)->delete();
		DB::table("objects")->where("uuid", "=", $object_uuid)->delete();

		$this->writeConfig();
		// TODO nagios restart

		return Response::json(array("success" => true));
	}

	private function getList()
	{
		return DB::table("commands")
			->join("objects", "commands.object_uuid", "=", "objects.uuid")
			->select("commands.id", "objects.first_name as command_name", "commands.command_line")
			->orderBy("commands.created_at", "desc")
			->get();
	}

	private function writeConfig()
	{
		global $config;

		$file = $config["NAGIOS_OBJECTS_DIR"].$config["NAGIOS_COMMANDS_CFG"];
		$commands = $this->getList();
		$contents = "";

		if (file_exists($file)) {
			unlink($file);
		}

		foreach ($commands as $command) {
			$contents .= $config["NAGIOS_DEFINE_COMMAND"]."{\n";
			$contents .= "\tcommand_name\t".$command->command_name."\n";
			$contents .= "\tcommand_line\t".$command->command_line."\n";
			$contents .= "}\n\n";
		}

		file_put_contents($file, $contents, FILE_APPEND | LOCK_EX);
	}

}