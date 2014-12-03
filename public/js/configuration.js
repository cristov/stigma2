var stigma2 = (function() {
	const CONTEXT_ROOT = "/stigma2";
	const PAGES_ROOT = CONTEXT_ROOT + "/views/pages/";

	var configuration = {
		home: CONTEXT_ROOT,
		route: [
			{"url": CONTEXT_ROOT, "templateUrl": PAGES_ROOT + "general.home.php", "controller": "HomeCtrl"},
			{"url": CONTEXT_ROOT + "/login", "templateUrl": PAGES_ROOT + "login.php", "controller": "LoginCtrl"},
			{"url": CONTEXT_ROOT + "/overview", "templateUrl": PAGES_ROOT + "status.overview.index.php", "controller": "StatusOverviewListCtrl"},
			{"url": CONTEXT_ROOT + "/hosts", "templateUrl": PAGES_ROOT + "status.host.index.php", "controller": "StatusHostListCtrl"},
			{"url": CONTEXT_ROOT + "/hosts/:id", "templateUrl": PAGES_ROOT + "status.host.show.php", "controller": "StatusHostShowCtrl"},
			{"url": CONTEXT_ROOT + "/services", "templateUrl": PAGES_ROOT + "status.service.index.php", "controller": "StatusServiceListCtrl"},
			{"url": CONTEXT_ROOT + "/services/:id", "templateUrl": PAGES_ROOT + "status.service.show.php", "controller": "StatusServiceShowCtrl"},
			{"url": CONTEXT_ROOT + "/hostgroups", "templateUrl": PAGES_ROOT + "status.hostgroup.index.php", "controller": "StatusHostgroupListCtrl"},
			{"url": CONTEXT_ROOT + "/servicegroups", "templateUrl": PAGES_ROOT + "status.servicegroup.index.php", "controller": "StatusServicegroupListCtrl"},
			{"url": CONTEXT_ROOT + "/problems", "templateUrl": PAGES_ROOT + "status.problem.index.php", "controller": "StatusProblemListCtrl"},
			{"url": CONTEXT_ROOT + "/trends", "templateUrl": PAGES_ROOT + "report.trend.index.php", "controller": "ReportTrendListCtrl"},
			{"url": CONTEXT_ROOT + "/trends/show", "templateUrl": PAGES_ROOT + "report.trend.show.php", "controller": "ReportTrendShowCtrl"},
			{"url": CONTEXT_ROOT + "/alerts", "templateUrl": PAGES_ROOT + "report.alert.index.php", "controller": "ReportAlertListCtrl"},
			{"url": CONTEXT_ROOT + "/configuration", "templateUrl": PAGES_ROOT + "system.configuration.index.php", "controller": "SystemConfigurationListCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/commands", "templateUrl": PAGES_ROOT + "system.configuration.command.index.php", "controller": "SystemConfigurationCommandListCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/commands/create", "templateUrl": PAGES_ROOT + "system.configuration.command.create.php", "controller": "SystemConfigurationCommandCreationCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/commands/:id/edit", "templateUrl": PAGES_ROOT + "system.configuration.command.edit.php", "controller": "SystemConfigurationCommandEditCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/hosts", "templateUrl": PAGES_ROOT + "system.configuration.host.index.php", "controller": "SystemConfigurationHostListCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/hosts/create", "templateUrl": PAGES_ROOT + "system.configuration.host.create.php", "controller": "SystemConfigurationHostCreationCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/hosts/:id", "templateUrl": PAGES_ROOT + "system.configuration.host.show.php", "controller": "SystemConfigurationHostEditCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/hosts/:id/edit", "templateUrl": PAGES_ROOT + "system.configuration.host.edit.php", "controller": "SystemConfigurationHostEditCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/services", "templateUrl": PAGES_ROOT + "system.configuration.service.index.php", "controller": "SystemConfigurationServiceListCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/services/create", "templateUrl": PAGES_ROOT + "system.configuration.service.create.php", "controller": "SystemConfigurationServiceCreationCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/services/:id", "templateUrl": PAGES_ROOT + "system.configuration.service.show.php", "controller": "SystemConfigurationServiceEditCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/services/:id/edit", "templateUrl": PAGES_ROOT + "system.configuration.service.edit.php", "controller": "SystemConfigurationServiceEditCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/timeperiods", "templateUrl": PAGES_ROOT + "system.configuration.timeperiod.index.php", "controller": "SystemConfigurationTimeperiodListCtrl"},
			{"url": CONTEXT_ROOT + "/configuration/timeperiods/create", "templateUrl": PAGES_ROOT + "system.configuration.timeperiod.create.php", "controller": "SystemConfigurationTimeperiodCreationCtrl"},
		]
	};

	return {
		getConfiguration: function() {
			return configuration;
		}
	};
}());