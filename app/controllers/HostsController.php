<?php

class HostsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /hosts
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
	 * GET /hosts/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /hosts
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /hosts/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$result = array(
			"host" => array(
				"status" => "UP",
				"duration" => "0d 3h 0m 43s",
				"info" => "PING OK - Packet loss = 0%, RTA = 0.05 ms",
				"performance" => "rta=0.052000ms;3000.000000;5000.000000;0.000000 pl=0%;80;100;0",
				"attempt" => "1/10  (HARD state)",
				"last_check" => "10-13-2014 08:45:03",
				"check_type" => "ACTIVE",
				"check_latency" => "0.119 / 4.009 seconds",
				"next_scheduled_active_check" => "10-13-2014 08:50:13",
				"last_state_change" => "10-13-2014 04:37:40",
				"last_notification" => "N/A (notification 0)",
				"host_flapping" => "NO (0.00% state change)",
				"scheduled_downtime" => "NO",
				"last_update" => "10-13-2014 08:47:43  ( 0d 0h 0m 1s ago)",
				"active_checks" => "ENABLED",
				"passive_checks" => "ENABLED",
				"obsessing" => "ENABLED",
				"notifications" => "ENABLED",
				"event_handler" => "ENABLED",
				"flap_detection" => "ENABLED"
			)
		);

		return Response::json($result);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /hosts/{id}/edit
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
	 * PUT /hosts/{id}
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
	 * DELETE /hosts/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

	private function getList() {
		$query = array(
			array("host_name" => "localhost1", "status" => "UP", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
			array("host_name" => "localhost2", "status" => "DOWN", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
			array("host_name" => "localhost3", "status" => "UNREACHABLE", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
			array("host_name" => "localhost4", "status" => "UP", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
		);

		if (Input::has("state")) {
			$state = Input::get("state");

			switch ($state) {
				case '0':
					$query = array(
						array("host_name" => "localhost1", "status" => "UP", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
						array("host_name" => "localhost4", "status" => "UP", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
					);
					break;
				case '1':
					$query = array(
						array("host_name" => "localhost2", "status" => "DOWN", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
					);
					break;
				case '2':
					$query = array(
						array("host_name" => "localhost3", "status" => "UNREACHABLE", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "info" => "PING OK - Packet loss = 0%, RTA = 0.06 ms"),
					);
					break;
				default:
					$query = array();
					break;
			}
		}

		return $query;
	}

}