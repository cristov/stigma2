<?php

require_once dirname(__FILE__)."/../../utils/UUID.php";

class UsersTableSeeder extends Seeder {

	public function run()
	{
		DB::table('users')->delete();

		$apikey = UUID::v4();
		$secretkey = Hash::make($apikey);

		User::create([
			'account' => 'admin',
			'accountid' => 'admin-account-id',
			'accounttype' => 'ADMIN',
			'apikey' => $apikey,
			'domain' => 'ROOT',
			'domainid' => 'root-domain-id',
			'email' => 'admin@zespro.co.kr',
			'firstname' => 'zes',
			'lastname' => 'pro',
			'password' => Hash::make('qwe123'),
			'secretkey' => $secretkey,
			'id' => 'zespro-user-id',
			'username' => 'zespro'
		]);
	}

}