<?php

class TimeperiodDetail extends \Eloquent {
	protected $table = 'timeperiod_details';
	protected $fillable = ['timeperiod_fk', 'key', 'value'];
}