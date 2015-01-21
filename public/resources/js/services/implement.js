define([], function() {
	function httpServiceImpl(http, method, params, url) {
		return http({
			method: method,
			url: url,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
			data: $.param(params)
		});
	};

	function httpDeleteServiceImpl(http, url) {
		return http.delete(url);
	};

	function httpGetServiceImpl(http, url) {
		return http.get(url)
			.then(function(result) {
				return result.data;
			});
	};

	return {
		httpServiceImpl: httpServiceImpl,
		httpDeleteServiceImpl: httpDeleteServiceImpl,
		httpGetServiceImpl: httpGetServiceImpl
	};
});