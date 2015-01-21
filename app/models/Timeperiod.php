<?php

class Timeperiod extends \Eloquent {
	protected $table = 'timeperiods';
	protected $fillable = ['object_uuid', 'alias'];
}