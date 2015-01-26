define(['angular', './controllers/index', './directives/index', './services/index', 'ui.router'], //'./filters/index', 
	function(angular) {
		'use strict';

		return angular.module('app', [
			'app.controllers',
			'app.directives',
			// 'app.filters',
			'app.services',
			'ui.router'
		]);
	}
);