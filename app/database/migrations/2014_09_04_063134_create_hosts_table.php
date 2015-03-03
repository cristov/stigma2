<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateHostsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('hosts', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('object_uuid', 128);
			$table->string('description', 1024);
			$table->string('command_fk', 128);
			$table->timestamps();

			$table->foreign('object_uuid')
				->references('uuid')->on('objects')
				->onDelete('cascade');
			
			$table->foreign('command_fk')
				->references('object_uuid')->on('commands')
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
		Schema::drop('hosts');
	}

}
