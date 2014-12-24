var services = angular.module('services', []);

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

services.factory('DashboardOverviewFactory', function($http) {
	return {
		list: function() {
			var url = stigma2.getConfiguration().home + '/api/overview';
			return httpGetServiceImpl($http, url);
		}
	}
});

services.factory('HostFactory', function($http) {
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
});

services.factory('ServiceFactory', function($http) {
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
});

services.factory('SystemConfigurationCommandFactory', function($http) {
	return {
		list: function() {
			var url = stigma2.getConfiguration().home + '/api/configuration/commands';
			return httpGetServiceImpl($http, url);
		},
		save: function(params) {
			var url = stigma2.getConfiguration().home + '/api/configuration/commands';
			return httpServiceImpl($http, 'POST', params, url);
		},
		show: function(id) {
			var url = stigma2.getConfiguration().home + '/api/configuration/commands/' + id;
			return httpGetServiceImpl($http, url);
		},
		update: function(id, params) {
			var url = stigma2.getConfiguration().home + '/api/configuration/commands/' + id;
			return httpServiceImpl($http, 'PUT', params, url);
		},
		remove: function(id) {
			var url = stigma2.getConfiguration().home + '/api/configuration/commands/' + id;
			return httpDeleteServiceImpl($http, url);
		}
	}
});

services.factory('SystemConfigurationHostFactory', function($http) {
	return {
		list: function(params) {
			var url = stigma2.getConfiguration().home + '/api/configuration/hosts';
			url = urlParameterHelper(url, params);
			return httpGetServiceImpl($http, url);
		},
		create: function() {
			var url = stigma2.getConfiguration().home + '/api/configuration/hosts/create';
			return httpGetServiceImpl($http, url);
		},
		save: function(params) {
			var url = stigma2.getConfiguration().home + '/api/configuration/hosts';
			return httpServiceImpl($http, 'POST', params, url);
		},
		show: function(id) {
			var url = stigma2.getConfiguration().home + '/api/configuration/hosts/' + id;
			return httpGetServiceImpl($http, url);
		},
		update: function(id, params) {
			var url = stigma2.getConfiguration().home + '/api/configuration/hosts/' + id;
			return httpServiceImpl($http, 'PUT', params, url);
		},
		remove: function(id) {
			var url = stigma2.getConfiguration().home + '/api/configuration/hosts/' + id;
			return httpDeleteServiceImpl($http, url);
		}
	}
});

services.factory('SystemConfigurationHostgroupFactory', function($http) {
	return {
		list: function() {
			var url = stigma2.getConfiguration().home + '/api/configuration/hostgroups';
			return httpGetServiceImpl($http, url);
		},
		save: function(params) {
			var url = stigma2.getConfiguration().home + '/api/configuration/hostgroups';
			return httpServiceImpl($http, 'POST', params, url);
		}
	}
});

services.factory('SystemConfigurationServiceFactory', function($http) {
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
});

services.factory('SystemConfigurationTimeperiodFactory', function($http) {
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
});

services.factory('DirectiveTimeperiodFactory', function() {
	var timeperiods = [];

	return {
		getTimeperiods: function() {
			return timeperiods;
		},
		register: function(timeperiod) {
			timeperiods.push(timeperiod);
		}
	};
});

var httpServiceImpl = function(http, method, params, url) {
	return http({
		method: method,
		url: url,
		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
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

var urlParameterHelper = function(url, params) {
	if (angular.isObject(params)) {
		var delimiter = '?';
		for (var key in params) {
			url += delimiter + key + '=' + params[key];
			delimiter = '&';
		};
	}
	return url;
};