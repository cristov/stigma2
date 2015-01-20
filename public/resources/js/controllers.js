define(function(require) {
	'use strict';

	var angular = require('angular');
	var controllers = angular.module('controllers', []);

	controllers.controller('MainCtrl', require('controllers/mainCtrl'));
	controllers.controller('HomeCtrl', require('controllers/homeCtrl'));
	controllers.controller('DashboardOverviewListCtrl', require('controllers/dashboardOverviewListCtrl'));
	controllers.controller('HostListCtrl', require('controllers/hostListCtrl'));
	controllers.controller('HostShowCtrl', require('controllers/hostShowCtrl'));
	controllers.controller('HostStatusCtrl', require('controllers/hostStatusCtrl'));
	controllers.controller('HostStatusShowCtrl', require('controllers/hostStatusShowCtrl'));
	controllers.controller('ServiceListCtrl', require('controllers/serviceListCtrl'));
	controllers.controller('ServiceShowCtrl', require('controllers/serviceShowCtrl'));
	controllers.controller('SystemConfigurationListCtrl', require('controllers/systemConfigurationListCtrl'));
	controllers.controller('SystemConfigurationCommandListCtrl', require('controllers/systemConfigurationCommandListCtrl'));
	controllers.controller('SystemConfigurationCommandCreationCtrl', require('controllers/systemConfigurationCommandCreationCtrl'));
	controllers.controller('SystemConfigurationCommandEditCtrl', require('controllers/systemConfigurationCommandEditCtrl'));
	controllers.controller('SystemConfigurationHostListCtrl', require('controllers/systemConfigurationHostListCtrl'));
	controllers.controller('SystemConfigurationHostCreationCtrl', require('controllers/systemConfigurationHostCreationCtrl'));
	controllers.controller('SystemConfigurationHostEditCtrl', require('controllers/systemConfigurationHostEditCtrl'));
	controllers.controller('SystemConfigurationServiceListCtrl', require('controllers/systemConfigurationServiceListCtrl'));
	controllers.controller('SystemConfigurationServiceCreationCtrl', require('controllers/systemConfigurationServiceCreationCtrl'));
	controllers.controller('SystemConfigurationTimeperiodListCtrl', require('controllers/systemConfigurationTimeperiodListCtrl'));
	controllers.controller('SystemConfigurationTimeperiodCreationCtrl', require('controllers/systemConfigurationTimeperiodCreationCtrl'));

	return controllers;
});