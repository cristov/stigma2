<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->string('id', 256);
			$table->string('account', 32);
			$table->string('accountid', 256);
			$table->string('accounttype', 32);
			$table->string('apikey', 256);
			$table->string('domain', 32);
			$table->string('domainid', 256);
			$table->string('email', 128);
			$table->string('firstname', 32);
			$table->string('lastname', 32);
			$table->string('password', 256);
			$table->string('secretkey', 256);
			$table->string('username', 64);
			$table->timestamps();
			$table->rememberToken();

			$table->primary('id');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
