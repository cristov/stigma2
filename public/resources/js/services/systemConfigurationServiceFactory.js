define(function() {
	'use strict';

	return function($http) {
		return {
			list: function(params) {
				var url = stigma2.getConfiguration().home + '/api/configuration/services';
				url = urlParameterHelper(url, params);
				return httpGetServiceImpl($http, url);
			},
			create: function() {
				var url = stigma2.getConfiguration().home + '/api/configuration/services/create';
				return httpGetServiceImpl($http, url);
			},
			save: function(params) {
				var url = stigma2.getConfiguration().home + '/api/configuration/services';
				return httpServiceImpl($http, 'POST', params, url);
			},
			show: function(id) {
				var url = stigma2.getConfiguration().home + '/api/configuration/services/' + id;
				return httpGetServiceImpl($http, url);
			},
			update: function(id, params) {
				var url = stigma2.getConfiguration().home + '/api/configuration/services/' + id;
				return httpServiceImpl($http, 'PUT', params, url);
			},
			remove: function(id) {
				var url = stigma2.getConfiguration().home + '/api/configuration/services/' + id;
				return httpDeleteServiceImpl($http, url);
			}
		}
	};
});