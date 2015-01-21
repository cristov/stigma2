<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateHostgroupsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('hostgroups', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('object_uuid', 128);
			$table->string('description', 1024);
			$table->timestamps();

			$table->foreign('object_uuid')
				->references('uuid')->on('objects')
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
		Schema::drop('hostgroups');
	}

}
