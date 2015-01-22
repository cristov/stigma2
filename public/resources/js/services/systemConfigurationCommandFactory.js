define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('SystemConfigurationCommandFactory', function($http) {
			return {
				list: function() {
					var url = appConfig.getConfiguration().home + '/api/configuration/commands';
					return implement.httpGetServiceImpl($http, url);
				},
				save: function(params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/commands';
					return implement.httpServiceImpl($http, 'POST', params, url);
				},
				show: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/commands/' + id;
					return implement.httpGetServiceImpl($http, url);
				},
				update: function(id, params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/commands/' + id;
					return implement.httpServiceImpl($http, 'PUT', params, url);
				},
				remove: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/commands/' + id;
					return implement.httpDeleteServiceImpl($http, url);
				}
			}
		});
	}
);