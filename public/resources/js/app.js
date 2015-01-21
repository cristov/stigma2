define(['angular', './controllers/index', './services/index', 'ui.router'], //'directives/index', 'filters/index', 
	function(angular) {
		'use strict';

		return angular.module('app', [
			'app.controllers',
			// 'app.directives',
			// 'app.filters',
			'app.services',
			'ui.router'
		]);
	}
);