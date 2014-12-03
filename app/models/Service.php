<?php

class Service extends \Eloquent {
	protected $table = 'services';
	protected $fillable = ['object_uuid', 'host_fk', 'name', 'description', 'command_fk'];
}