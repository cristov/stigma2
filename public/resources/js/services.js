define(function(require) {
	'use strict';

	var angular = require('angular');
	var services = angular.module('services', []);

	services.service('AccountFactory', require('services/accountFactory'));
	services.service('DashboardOverviewFactory', require('services/dashboardOverviewFactory'));
	services.service('HostFactory', require('services/hostFactory'));
	services.service('ServiceFactory', require('services/serviceFactory'));
	services.service('SystemConfigurationCommandFactory', require('services/systemConfigurationCommandFactory'));
	services.service('SystemConfigurationHostFactory', require('services/systemConfigurationHostFactory'));
	services.service('SystemConfigurationHostgroupFactory', require('services/systemConfigurationHostgroupFactory'));
	services.service('SystemConfigurationServiceFactory', require('services/systemConfigurationServiceFactory'));
	services.service('SystemConfigurationTimeperiodFactory', require('services/systemConfigurationTimeperiodFactory'));
	services.service('DirectiveTimeperiodFactory', require('services/directiveTimeperiodFactory'));

	return services;
});