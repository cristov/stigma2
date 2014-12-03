<?php

class ServicePerformance extends \Eloquent {
	protected $table = 'service_performances';
	protected $fillable = ['service_fk', 'key', 'value'];
}