<?php

class Command extends \Eloquent {
	protected $table = 'commands';
	protected $fillable = ['object_uuid', 'command_line'];
}