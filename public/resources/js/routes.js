define(['app', './app-config'],
	function(app, appConfig) {
		'use strict';

		return app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
			function($locationProvider, $stateProvider, $urlRouterProvider) {
				$locationProvider.html5Mode(true);

				var route = appConfig.getConfiguration().route;
				for (var i in route) {
					$stateProvider.state(route[i].state, {
						url: route[i].url,
						templateUrl: route[i].templateUrl,
						controller: route[i].controller
					});
				}

				$urlRouterProvider.otherwise(appConfig.getConfiguration().home);
			}
		]);
	}
);