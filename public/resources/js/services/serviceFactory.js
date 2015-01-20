define(function() {
	'use strict';

	return function($http) {
		return {
			list: function(params) {
				var url = stigma2.getConfiguration().home + '/api/services';
				url = urlParameterHelper(url, params);
				return httpGetServiceImpl($http, url);
			},
			show: function(id) {
				var url = stigma2.getConfiguration().home + '/api/services/' + id;
				return httpGetServiceImpl($http, url);
			}
		}
	};
});