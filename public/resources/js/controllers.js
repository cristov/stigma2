define(function(require) {
	'use strict';

	var angular = require('angular');
	var controllers = angular.module('controllers', []);

	controllers.controller('State1Ctrl', require('controllers/state1Ctrl'));

	return controllers;
});