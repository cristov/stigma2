define(['./module'],
	function(services) {
		'use strict';

		services.factory('SystemConfigurationHostgroupFactory', function($http) {
			return {
				list: function() {
					var url = stigma2.getConfiguration().home + '/api/configuration/hostgroups';
					return httpGetServiceImpl($http, url);
				},
				save: function(params) {
					var url = stigma2.getConfiguration().home + '/api/configuration/hostgroups';
					return httpServiceImpl($http, 'POST', params, url);
				},
				show: function(id) {
					var url = stigma2.getConfiguration().home + '/api/configuration/hostgroups/' + id;
					return httpGetServiceImpl($http, url);
				}
			}
		});
	}
);