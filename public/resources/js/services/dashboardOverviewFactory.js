define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('DashboardOverviewFactory', function($http) {
			return {
				list: function() {
					var url = appConfig.getConfiguration().home + '/api/overview';
					return implement.httpGetServiceImpl($http, url);
				}
			}
		});
	}
);