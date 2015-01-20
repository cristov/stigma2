define(function() {
	'use strict';

	return function($http) {
		return {
			list: function(params) {
				var url = stigma2.getConfiguration().home + '/api/hosts';
				url = urlParameterHelper(url, params);
				return httpGetServiceImpl($http, url);
			},
			show: function(id) {
				var url = stigma2.getConfiguration().home + '/api/hosts/' + id;
				return httpGetServiceImpl($http, url);
			}
		}
	};
});