<?php

require_once dirname(__FILE__)."/../../utils/UUID.php";

class HostPerformancesTableSeeder extends Seeder {

	public function run()
	{
		DB::table('host_performances')->delete();

		foreach(range(1, 10) as $index)
		{
			$apikey = UUID::v4();
			
			Object::create([
				'uuid' => $apikey,
				'object_type' => '1',
				'first_name' => 'localhost',
				'second_name' => '',
				'is_active' => '1'
			]);
			Host::create([
				'object_uuid' => $apikey,
				'name' => 'localhost',
				'description' => 'test',
				'command_fk' => $index.'_-_'.$apikey
			]);

			HostPerformance::create([
				'host_fk' => $index,
				'key' => 'PING',
				'value' => 'OK'
			]);
			HostPerformance::create([
				'host_fk' => $index,
				'key' => 'Packet loss',
				'value' => '0%'
			]);
			HostPerformance::create([
				'host_fk' => $index,
				'key' => 'RTA',
				'value' => '0.05 ms'
			]);
		}
	}

}