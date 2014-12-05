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
			scope.timeperiodData.foo2 = scope.foo2[0];
			scope.timeperiodData.foo3 = scope.foo3[0];
			scope.timeperiodData.bar1 = scope.bar1[0];
			scope.timeperiodData.bar2 = scope.bar2[0];
			scope.timeperiodData.bar3 = scope.bar3[0];
			scope.timeperiodData.bar4 = scope.bar4[0];

			var monthObj = new Object();
			var weekObj = new Object();

			for (var i in stigma2.getConfiguration().timeperiod.month) {
				var month = stigma2.getConfiguration().timeperiod.month[i];
				monthObj[month.text] = month.value;
			}
			for (var i in stigma2.getConfiguration().timeperiod.week) {
				var week = stigma2.getConfiguration().timeperiod.week[i];
				weekObj[week.text] = week.value;
			}

			scope.$watch("timeperiodData.foo1", function(newValue, oldValue) {
				if (newValue === oldValue) return;
				
				if (monthObj.hasOwnProperty(oldValue.text) && weekObj.hasOwnProperty(newValue.text)) {
					scope.isWeek = true;
					scope.foo2 = stigma2.getConfiguration().timeperiod.weekday;
					scope.timeperiodData.foo2 = scope.foo2[1];
					scope.timeperiodData.foo3 = scope.foo3[0];
				} else if (weekObj.hasOwnProperty(oldValue.text) && monthObj.hasOwnProperty(newValue.text)) {
					scope.isWeek = false;
					scope.foo2 = stigma2.getConfiguration().timeperiod.day;
					scope.timeperiodData.foo2 = scope.foo2[0];
					scope.timeperiodData.foo3 = "";
				}
			});

			scope.deleteRow = function(num) {
				jQuery('tr[count="' + num + '"]').remove();
			};
		}
	};
});