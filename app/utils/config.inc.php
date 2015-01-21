<?php

	$config;

	$config["NAGIOS_ROOT_DIR"] = "/etc/nagios/";
	$config["NAGIOS_OBJECTS_DIR"] = $config["NAGIOS_ROOT_DIR"]."objects/";
	$config["NAGIOS_COMMANDS_CFG"] = "test_commands.cfg";
	$config["NAGIOS_HOSTS_CFG"] = "test_hosts.cfg";
	$config["NAGIOS_SERVICES_CFG"] = "test_services.cfg";
	$config["NAGIOS_TIMEPERIODS_CFG"] = "test_timeperiods.cfg";

	$config["NAGIOS_DEFINE_COMMAND"] = "define command";
	$config["NAGIOS_DEFINE_HOST"] = "define host";
	$config["NAGIOS_DEFINE_SERVICE"] = "define service";
	$config["NAGIOS_DEFINE_TIMEPERIOD"] = "define timeperiod";

	$GLOBALS["config"] = $config;

?>