<?php

class ServicesController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /services
	 *
	 * @return Response
	 */
	public function index()
	{
		$services = array(
			array("host_name" => "localhost", "service_name" => "Current Load", "status" => "OK", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "1/4", "info" => "OK - load average: 0.07, 0.16, 0.14"),
			array("host_name" => "localhost", "service_name" => "Current Users", "status" => "OK", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "1/4", "info" => "USERS OK - 0 users currently logged in"),
			array("host_name" => "localhost", "service_name" => "HTTP", "status" => "OK", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "1/4", "info" => "HTTP OK: HTTP/1.1 200 OK - 321 bytes in 0.001 second response time"),
			array("host_name" => "localhost", "service_name" => "PING", "status" => "OK", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "1/4", "info" => "PING OK - Packet loss = 0%, RTA = 0.07 ms"),
			array("host_name" => "localhost", "service_name" => "Root Partition", "status" => "OK", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "1/4", "info" => "DISK OK - free space: / 73696 MB (96% inode=98%):"),
			array("host_name" => "localhost", "service_name" => "SSH", "status" => "CRITICAL", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "4/4", "info" => "Connection refused"),
			array("host_name" => "localhost", "service_name" => "Swap Usage", "status" => "OK", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "1/4", "info" => "SWAP OK - 100% free (764 MB out of 767 MB)"),
			array("host_name" => "localhost", "service_name" => "Total Processes", "status" => "OK", "last_check" => "10-13-2014 06:24:01", "duration" => "0d 2h 18m 46s", "attempt" => "1/4", "info" => "PROCS OK: 15 processes with STATE = RSZDT")
		);

		return Response::json($services);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /services/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /services
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /services/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$result = array(
			"service" => array(
				"status" => "OK",
				"duration" => "0d 23h 31m 0s",
				"info" => "HTTP OK: HTTP/1.1 200 OK - 321 bytes in 0.001 second response time",
				"performance" => "time=0.000888s;;;0.000000 size=321B;;;0",
				"attempt" => "1/4  (HARD state)",
				"last_check" => "10-14-2014 04:07:33",
				"check_type" => "ACTIVE",
				"check_latency" => "0.156 / 0.008 seconds",
				"next_scheduled_active_check" => "10-14-2014 04:12:33",
				"last_state_change" => "10-14-2014 04:38:55",
				"last_notification" => "N/A (notification 0)",
				"host_flapping" => "NO (0.00% state change)",
				"scheduled_downtime" => "NO",
				"last_update" => "10-14-2014 04:11:21  ( 0d 0h 0m 5s ago)",
				"active_checks" => "ENABLED",
				"passive_checks" => "ENABLED",
				"obsessing" => "ENABLED",
				"notifications" => "DISABLED",
				"event_handler" => "ENABLED",
				"flap_detection" => "ENABLED"
			)
		);

		return Response::json($result);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /services/{id}/edit
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
	 * PUT /services/{id}
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
	 * DELETE /services/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}