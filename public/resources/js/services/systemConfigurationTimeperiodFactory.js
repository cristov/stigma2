define(function() {
	'use strict';

	return function($http) {
		return {
			list: function() {
				var url = stigma2.getConfiguration().home + '/api/configuration/timeperiods';
				return httpGetServiceImpl($http, url);
			},
			save: function(params) {
				var url = stigma2.getConfiguration().home + '/api/configuration/timeperiods';
				return httpServiceImpl($http, 'POST', params, url);
			},
			show: function(id) {
				var url = stigma2.getConfiguration().home + '/api/configuration/timeperiods/' + id;
				return httpGetServiceImpl($http, url);
			},
			update: function(id, params) {
				var url = stigma2.getConfiguration().home + '/api/configuration/timeperiods/' + id;
				return httpServiceImpl($http, 'PUT', params, url);
			},
			remove: function(id) {
				var url = stigma2.getConfiguration().home + '/api/configuration/timeperiods/' + id;
				return httpDeleteServiceImpl($http, url);
			}
		}
	};
});