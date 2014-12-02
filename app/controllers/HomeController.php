<?php

class HomeController extends BaseController {

	public function showIndex()
	{
		return View::make('index');
	}

	public function showLogin()
	{
		return View::make('login');
	}

}
