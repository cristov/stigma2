<?php

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
		//
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
		$result = array(
			array("timeperiod_name" => "24x7")
		);

		return $result;
	}

}