define(['./module', '../app-config'],
	function(directives, appConfig) {
		'use strict';

		directives.directive('timeperiodAddRow', [
			'DirectiveTimeperiodFactory',
			function(DirectiveTimeperiodFactory) {
				return {
					restrict: 'E',
					replace: true,
					scope: {
						count: '='
					},
					templateUrl: appConfig.getConfiguration().partial + 'system.configuration.timeperiod.add_row_directive.php',
					link: function (scope, element, attrs) {
						scope.timeperiodData = {};
						scope.isWeek = false;
						
						scope.foo1 = appConfig.getConfiguration().timeperiod.month.concat(appConfig.getConfiguration().timeperiod.week);
						scope.foo2 = appConfig.getConfiguration().timeperiod.day;
						scope.foo3 = appConfig.getConfiguration().timeperiod.month;
						scope.bar1 = appConfig.getConfiguration().timeperiod.hour;
						scope.bar2 = appConfig.getConfiguration().timeperiod.minite;
						scope.bar3 = appConfig.getConfiguration().timeperiod.hour;
						scope.bar4 = appConfig.getConfiguration().timeperiod.minite;

						scope.timeperiodData.foo1 = scope.foo1[0];
						scope.timeperiodData.foo2 = scope.foo2[0];
						scope.timeperiodData.foo3 = "";
						scope.timeperiodData.bar1 = scope.bar1[0];
						scope.timeperiodData.bar2 = scope.bar2[0];
						scope.timeperiodData.bar3 = scope.bar3[0];
						scope.timeperiodData.bar4 = scope.bar4[0];

						DirectiveTimeperiodFactory.register(scope.timeperiodData);

						var monthObj = new Object();
						var weekObj = new Object();

						for (var i in appConfig.getConfiguration().timeperiod.month) {
							var month = appConfig.getConfiguration().timeperiod.month[i];
							monthObj[month.text] = month.value;
						}
						for (var i in appConfig.getConfiguration().timeperiod.week) {
							var week = appConfig.getConfiguration().timeperiod.week[i];
							weekObj[week.text] = week.value;
						}

						scope.$watch('timeperiodData.foo1', function(newValue, oldValue) {
							if (newValue === oldValue) return;
							
							if (monthObj.hasOwnProperty(oldValue.text) && weekObj.hasOwnProperty(newValue.text)) {
								scope.isWeek = true;
								scope.foo2 = appConfig.getConfiguration().timeperiod.weekday;
								scope.timeperiodData.foo2 = scope.foo2[1];
								scope.timeperiodData.foo3 = scope.foo3[0];
							} else if (weekObj.hasOwnProperty(oldValue.text) && monthObj.hasOwnProperty(newValue.text)) {
								scope.isWeek = false;
								scope.foo2 = appConfig.getConfiguration().timeperiod.day;
								scope.timeperiodData.foo2 = scope.foo2[0];
								scope.timeperiodData.foo3 = "";
							}
						});

						scope.deleteRow = function(num) {
							angular.element('tr[count="' + num + '"]').remove();
						};
					}
				};
			}
		]);
	}
);