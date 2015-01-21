<?php

class Hostgroup extends \Eloquent {
	protected $table = 'hostgroups';
	protected $fillable = ['object_uuid', 'description'];
}