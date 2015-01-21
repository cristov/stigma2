<?php

class OverviewController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /overview
	 *
	 * @return Response
	 */
	public function index()
	{
		$host = array("down" => 0, "unreachable" => 0, "up" => 1, "pending" => 0);
		$service = array("critical" => 1, "warning" => 2, "unknown" => 1, "ok" => 6, "pending" => 0);

		$result = array(
			"host" => $host,
			"service" => $service
		);

		return Response::json($result);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /overview/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /overview
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /overview/{id}
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
	 * GET /overview/{id}/edit
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
	 * PUT /overview/{id}
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
	 * DELETE /overview/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}