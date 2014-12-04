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

mainApp.directive('timeperiodAddRow', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			count: '='
		},
		templateUrl: stigma2.getConfiguration().directive + 'timeperiod.add.row.php',
		link: function (scope, element, attrs) {
			scope.timeperiodData = {};
			scope.isWeek = false;
			
			scope.foo1 = stigma2.getConfiguration().timeperiod.month.concat(stigma2.getConfiguration().timeperiod.week);
			scope.foo2 = stigma2.getConfiguration().timeperiod.day;
			scope.foo3 = stigma2.getConfiguration().timeperiod.month;
			scope.bar1 = stigma2.getConfiguration().timeperiod.hour;
			scope.bar2 = stigma2.getConfiguration().timeperiod.minite;
			scope.bar3 = stigma2.getConfiguration().timeperiod.hour;
			scope.bar4 = stigma2.getConfiguration().timeperiod.minite;

			scope.timeperiodData.foo1 = scope.foo1[0];
			scope.timeperiodData.foo2 = scope.foo2[5];
			scope.timeperiodData.bar1 = scope.bar1[0];
			scope.timeperiodData.bar2 = scope.bar2[0];
			scope.timeperiodData.bar3 = scope.bar3[0];
			scope.timeperiodData.bar4 = scope.bar4[0];

			scope.$watch("timeperiodData.foo1", function(newValue, oldValue) {
				if (newValue === oldValue) return;
				scope.isWeek = false;
				for (var i in stigma2.getConfiguration().timeperiod.week) {
					var week = stigma2.getConfiguration().timeperiod.week[i].value;
					if (newValue.value === week) {
						scope.isWeek = true;
						break;
					}
				}
			});
		}
	};
});