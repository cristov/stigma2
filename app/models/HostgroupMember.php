<?php

class HostgroupMember extends \Eloquent {
	protected $table = 'hostgroup_members';
	protected $fillable = ['hostgroup_fk', 'member'];
}