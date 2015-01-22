define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('AccountFactory', function($http) {
			return {
				login: function(params) {
					var url = appConfig.getConfiguration().home + '/login';
					return implement.httpServiceImpl($http, 'POST', params, url);
				},
				logout: function() {
					var url = appConfig.getConfiguration().home + '/logout';
					return implement.httpGetServiceImpl($http, url);
				}
			}
		});
	}
);