var mainApp = angular.module('mainApp', ['ngDraggable', 'ngRoute', 'services']);

mainApp.config(function($routeProvider, $locationProvider) {
	// use the HTML5 History API
	$locationProvider.html5Mode(true);

	var route = stigma2.getConfiguration().route;
	for (var i in route) {
		$routeProvider.when(route[i].url, {
			templateUrl : route[i].templateUrl,
			controller : route[i].controller
		})
	}

	$routeProvider.otherwise({redirectTo: stigma2.getConfiguration().home});
});