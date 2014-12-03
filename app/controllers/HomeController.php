<?php

class HomeController extends BaseController {

	public function doLogin()
	{
		$validator = Validator::make(Input::all(), User::$rules);

		if ($validator->fails()) {
			$result = array(
				"success" => false,
				"messages" => $validator->messages()
			);
			return Response::json($result);
		} else {
			$userdata = array(
				"username" => Input::get("username"),
				"password" => Input::get("password")
			);

			if (Auth::attempt($userdata)) {
				$userAll = Auth::user();
				$user = array(
					"account" => $userAll->account,
					"email" => $userAll->email,
					"firstname" => $userAll->firstname,
					"lastname" => $userAll->lastname,
					"username" => $userAll->username,
					"created_at" => $userAll->created_at,
					"updated_at" => $userAll->updated_at
				);
				$result = array(
					"success" => true,
					"user" => $user
				);
				return Response::json($result);
			} else {
				$result = array(
					"success" => false,
					"messages" => array(
						"failure" => array(0 => "Your username/password combination was incorrect.")
					)
				);
				return Response::json($result);
			}
		}
	}

	public function doLogout()
	{
		Auth::logout();
		// Session::flush();

		$result = array(
			"success" => true
		);
		return Response::json($result);
	}

	public function showIndex()
	{
		return View::make('index');
	}

	public function showLogin()
	{
		return View::make('login');
	}

}
