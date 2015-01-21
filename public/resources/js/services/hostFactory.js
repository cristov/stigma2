define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('HostFactory', function($http) {
			return {
				list: function(params) {
					var url = appConfig.getConfiguration().home + '/api/hosts';
					url = implement.addParamsToURL(url, params);
					return implement.httpGetServiceImpl($http, url);
				},
				show: function(id) {
					var url = appConfig.getConfiguration().home + '/api/hosts/' + id;
					return implement.httpGetServiceImpl($http, url);
				}
			}
		});
	}
);