define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('SystemConfigurationHostgroupFactory', function($http) {
			return {
				list: function() {
					var url = appConfig.getConfiguration().home + '/api/configuration/hostgroups';
					return implement.httpGetServiceImpl($http, url);
				},
				save: function(params) {
					var url = appConfig.getConfiguration().home + '/api/configuration/hostgroups';
					return implement.httpServiceImpl($http, 'POST', params, url);
				},
				show: function(id) {
					var url = appConfig.getConfiguration().home + '/api/configuration/hostgroups/' + id;
					return implement.httpGetServiceImpl($http, url);
				}
			}
		});
	}
);