<?php

class Object extends \Eloquent {
	protected $table = 'objects';
	protected $fillable = ['uuid', 'object_type', 'first_name', 'second_name', 'is_active'];
}