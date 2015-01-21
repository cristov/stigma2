<?php

class HostPerformance extends \Eloquent {
	protected $table = 'host_performances';
	protected $fillable = ['host_fk', 'key', 'value'];
}