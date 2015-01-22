define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('SystemConfigurationServiceFactory', function($http) {
			return {
				list: function(params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/services';
					url = implement.addParamsToURL(url, params);
					return implement.httpGetServiceImpl($http, url);
				},
				create: function() {
					var url = appConfig.getConfiguration().home + '/api/configuration/services/create';
					return implement.httpGetServiceImpl($http, url);
				},
				save: function(params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/services';
					return implement.httpServiceImpl($http, 'POST', params, url);
				},
				show: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/services/' + id;
					return implement.httpGetServiceImpl($http, url);
				},
				update: function(id, params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/services/' + id;
					return implement.httpServiceImpl($http, 'PUT', params, url);
				},
				remove: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/services/' + id;
					return implement.httpDeleteServiceImpl($http, url);
				}
			}
		});
	}
);