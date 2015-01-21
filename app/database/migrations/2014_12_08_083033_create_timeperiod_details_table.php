<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTimeperiodDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('timeperiod_details', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('timeperiod_fk', 128);
			$table->string('key', 128);
			$table->string('value', 1024);
			$table->timestamps();

			$table->foreign('timeperiod_fk')
				->references('object_uuid')->on('timeperiods')
				->onDelete('cascade');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('timeperiod_details');
	}

}
