<?php

class Host extends \Eloquent {
	protected $table = 'hosts';
	protected $fillable = ['object_uuid', 'name', 'description', 'command_fk'];
}