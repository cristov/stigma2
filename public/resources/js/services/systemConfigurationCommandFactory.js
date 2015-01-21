define(['./module'],
	function(services) {
		'use strict';

		services.factory('SystemConfigurationCommandFactory', function($http) {
			return {
				list: function() {
					var url = stigma2.getConfiguration().home + '/api/configuration/commands';
					return httpGetServiceImpl($http, url);
				},
				save: function(params) {
					var url = stigma2.getConfiguration().home + '/api/configuration/commands';
					return httpServiceImpl($http, 'POST', params, url);
				},
				show: function(id) {
					var url = stigma2.getConfiguration().home + '/api/configuration/commands/' + id;
					return httpGetServiceImpl($http, url);
				},
				update: function(id, params) {
					var url = stigma2.getConfiguration().home + '/api/configuration/commands/' + id;
					return httpServiceImpl($http, 'PUT', params, url);
				},
				remove: function(id) {
					var url = stigma2.getConfiguration().home + '/api/configuration/commands/' + id;
					return httpDeleteServiceImpl($http, url);
				}
			}
		});
	}
);