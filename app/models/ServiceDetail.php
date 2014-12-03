<?php

class ServiceDetail extends \Eloquent {
	protected $table = 'service_details';
	protected $fillable = ['service_fk', 'key', 'value'];
}