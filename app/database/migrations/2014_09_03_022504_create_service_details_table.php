<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateServiceDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('service_details', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('service_fk', 128);
			$table->string('key', 128);
			$table->string('value', 1024);
			$table->timestamps();

			$table->foreign('service_fk')
				->references('object_uuid')->on('services')
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
		Schema::drop('service_details');
	}

}
