define(function() {
	'use strict';

	return function($http) {
		return {
			list: function() {
				var url = stigma2.getConfiguration().home + '/api/overview';
				return httpGetServiceImpl($http, url);
			}
		}
	};
});