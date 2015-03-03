<?php

require_once dirname(__FILE__)."/../../utils/UUID.php";

class TimeperiodsTableSeeder extends Seeder {

	public function run()
	{
		DB::table('timeperiods')->delete();
		DB::table('timeperiod_details')->delete();

		$uuid = UUID::v4();
		Object::create([
			'uuid' => $uuid,
			'object_type' => '9',
			'first_name' => '24x7',
			'second_name' => '',
			'is_active' => '1'
		]);
		Timeperiod::create([
			'object_uuid' => $uuid,
			'alias' => '24 Hours A Day, 7 Days A Week'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'timeperiod_name',
			'value' => '24x7'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'alias',
			'value' => '24 Hours A Day, 7 Days A Week'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'sunday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'monday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'tuesday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'wednesday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'thursday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'friday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'saturday',
			'value' => '00:00-24:00'
		]);

		$uuid = UUID::v4();
		Object::create([
			'uuid' => $uuid,
			'object_type' => '9',
			'first_name' => 'workhours',
			'second_name' => '',
			'is_active' => '1'
		]);
		Timeperiod::create([
			'object_uuid' => $uuid,
			'alias' => 'Normal Work Hours'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'timeperiod_name',
			'value' => 'workhours'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'alias',
			'value' => 'Normal Work Hours'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'monday',
			'value' => '09:00-17:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'tuesday',
			'value' => '09:00-17:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'wednesday',
			'value' => '09:00-17:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'thursday',
			'value' => '09:00-17:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'friday',
			'value' => '09:00-17:00'
		]);

		$uuid = UUID::v4();
		Object::create([
			'uuid' => $uuid,
			'object_type' => '9',
			'first_name' => 'none',
			'second_name' => '',
			'is_active' => '1'
		]);
		Timeperiod::create([
			'object_uuid' => $uuid,
			'alias' => 'No Time Is A Good Time'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'timeperiod_name',
			'value' => 'none'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'alias',
			'value' => 'No Time Is A Good Time'
		]);

		$uuid = UUID::v4();
		Object::create([
			'uuid' => $uuid,
			'object_type' => '9',
			'first_name' => 'us-holidays',
			'second_name' => '',
			'is_active' => '1'
		]);
		Timeperiod::create([
			'object_uuid' => $uuid,
			'alias' => 'U.S. Holidays'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'name',
			'value' => 'us-holidays'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'timeperiod_name',
			'value' => 'us-holidays'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'alias',
			'value' => 'U.S. Holidays'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'january 1',
			'value' => '00:00-00:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'monday -1 may',
			'value' => '00:00-00:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'july 4',
			'value' => '00:00-00:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'monday 1 september',
			'value' => '00:00-00:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'thursday 4 november',
			'value' => '00:00-00:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'december 25',
			'value' => '00:00-00:00     ; Christmas'
		]);

		$uuid = UUID::v4();
		Object::create([
			'uuid' => $uuid,
			'object_type' => '9',
			'first_name' => '24x7_sans_holidays',
			'second_name' => '',
			'is_active' => '1'
		]);
		Timeperiod::create([
			'object_uuid' => $uuid,
			'alias' => '24x7 Sans Holidays'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'timeperiod_name',
			'value' => '24x7_sans_holidays'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'alias',
			'value' => '24x7 Sans Holidays'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'use',
			'value' => 'us-holidays             ; Get holiday exceptions from other timeperiod'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'sunday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'monday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'tuesday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'wednesday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'thursday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'friday',
			'value' => '00:00-24:00'
		]);
		TimeperiodDetail::create([
			'timeperiod_fk' => $uuid,
			'key' => 'saturday',
			'value' => '00:00-24:00'
		]);
	}

}