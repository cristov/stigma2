define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('SystemConfigurationHostFactory', function($http) {
			return {
				list: function(params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/hosts';
					url = implement.addParamsToURL(url, params);
					return implement.httpGetServiceImpl($http, url);
				},
				create: function() {
					var url = appConfig.getConfiguration().home + '/api/configuration/hosts/create';
					return implement.httpGetServiceImpl($http, url);
				},
				save: function(params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/hosts';
					return implement.httpServiceImpl($http, 'POST', params, url);
				},
				show: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/hosts/' + id;
					return implement.httpGetServiceImpl($http, url);
				},
				update: function(id, params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/hosts/' + id;
					return implement.httpServiceImpl($http, 'PUT', params, url);
				},
				remove: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/hosts/' + id;
					return implement.httpDeleteServiceImpl($http, url);
				}
			}
		});
	}
);