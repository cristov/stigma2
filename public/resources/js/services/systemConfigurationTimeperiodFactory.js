define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('SystemConfigurationTimeperiodFactory', function($http) {
			return {
				list: function() {
					var url = appConfig.getConfiguration().home + '/api/configuration/timeperiods';
					return implement.httpGetServiceImpl($http, url);
				},
				save: function(params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/timeperiods';
					return implement.httpServiceImpl($http, 'POST', params, url);
				},
				show: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/timeperiods/' + id;
					return implement.httpGetServiceImpl($http, url);
				},
				update: function(id, params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/timeperiods/' + id;
					return implement.httpServiceImpl($http, 'PUT', params, url);
				},
				remove: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/timeperiods/' + id;
					return implement.httpDeleteServiceImpl($http, url);
				}
			}
		});
	}
);