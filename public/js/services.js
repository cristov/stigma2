var services = angular.module("services", []);

services.factory("AccountFactory", function($http) {
	return {
		login: function(params) {
			var url = stigma2.getConfiguration().home + "/login";
			return httpServiceImpl($http, "POST", params, url);
		},
		logout: function() {
			var url = stigma2.getConfiguration().home + "/logout";
			return httpGetServiceImpl($http, url);
		}
	}
});

var httpServiceImpl = function(http, method, params, url) {
	return http({
		method: method,
		url: url,
		headers: { "Content-Type" : "application/x-www-form-urlencoded" },
		data: $.param(params)
	});
};

var httpDeleteServiceImpl = function(http, url) {
	return http.delete(url);
};

var httpGetServiceImpl = function(http, url) {
	return http.get(url)
		.then(function(result) {
			return result.data;
		});
};