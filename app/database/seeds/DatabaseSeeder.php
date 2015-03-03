<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('CommandsTableSeeder');
		$this->call('ServicesTableSeeder');
		$this->call('TimeperiodsTableSeeder');
		$this->call('UsersTableSeeder');
	}

}
