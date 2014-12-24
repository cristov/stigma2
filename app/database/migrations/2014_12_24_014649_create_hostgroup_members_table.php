<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateHostgroupMembersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('hostgroup_members', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('hostgroup_fk', 128);
			$table->string('member', 128);
			$table->timestamps();

			$table->foreign('hostgroup_fk')
				->references('object_uuid')->on('hostgroups')
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
		Schema::drop('hostgroup_members');
	}

}
