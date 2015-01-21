define(['./module'],
	function(services) {
		'use strict';

		services.factory('AccountFactory', function($http) {
			return {
				login: function(params) {
					var url = stigma2.getConfiguration().home + '/login';
					return httpServiceImpl($http, 'POST', params, url);
				},
				logout: function() {
					var url = stigma2.getConfiguration().home + '/logout';
					return httpGetServiceImpl($http, url);
				}
			}
		});
	}
);