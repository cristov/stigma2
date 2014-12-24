<?php

class ConfigurationHostgroupsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /hostgroups
	 *
	 * @return Response
	 */
	public function index()
	{
		$hostgroups = $this->getList();

		return Response::json($hostgroups);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /hostgroups/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /hostgroups
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$v4uuid = UUID::v4();

		Object::create(array(
			"uuid" => $v4uuid,
			"object_type" => "3",
			"first_name" => $input["hostgroup_name"],
			"is_active" => "1"
		));

		Hostgroup::create(array(
			"object_uuid" => $v4uuid
		));

		foreach ($input["members"] as $value) {
			HostgroupMember::create(array(
				"hostgroup_fk" => $v4uuid,
				"member" => $value
			));
		}

		// $this->writeConfig();
		// TODO nagios restart

		$hostgroups = $this->getList();
		return Response::json(array("success" => true, "hostgroups" => $hostgroups));
	}

	/**
	 * Display the specified resource.
	 * GET /hostgroups/{id}
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
	 * GET /hostgroups/{id}/edit
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
	 * PUT /hostgroups/{id}
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
	 * DELETE /hostgroups/{id}
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
		$query = DB::table("hostgroups")
				->join("objects", "hostgroups.object_uuid", "=", "objects.uuid")
				->select("hostgroups.id", "hostgroups.object_uuid", "objects.first_name as hostgroup_name")
				->orderBy("hostgroups.created_at", "desc");
		return $query->get();
	}

}