<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateHostPerformancesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('host_performances', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('host_fk', 128);
			$table->string('key', 128);
			$table->string('value', 1024);
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('host_performances');
	}

}
