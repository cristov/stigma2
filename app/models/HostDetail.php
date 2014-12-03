<?php

class HostDetail extends \Eloquent {
	protected $table = 'host_details';
	protected $fillable = ['host_fk', 'key', 'value'];
}