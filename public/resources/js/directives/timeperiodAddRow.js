define(['./module', '../app-config'],
	function(directives, appConfig) {
		'use strict';

		directives.directive('timeperiodAddRow', [
			'DirectiveTimeperiodFactory',
			function(DirectiveTimeperiodFactory) {
				function setScopeData(scope) {
					scope.timeperiodData = {};
					// scope.isWeek = true;
					
					scope.foo1 = appConfig.getConfiguration().timeperiod.month.concat(appConfig.getConfiguration().timeperiod.week);
					scope.foo2 = appConfig.getConfiguration().timeperiod.weekday;
					scope.foo3 = appConfig.getConfiguration().timeperiod.month;
					scope.bar1 = appConfig.getConfiguration().timeperiod.hour;
					scope.bar2 = appConfig.getConfiguration().timeperiod.minite;
					scope.bar3 = appConfig.getConfiguration().timeperiod.hour;
					scope.bar4 = appConfig.getConfiguration().timeperiod.minite;

					scope.foo1.splice(0, 1);
				}

				function setTimeperiodData(scope) {
					var data = scope.getdata(scope.count);
					if (data === null || data === undefined) {
						scope.timeperiodData.foo1 = scope.foo1[13];
						scope.timeperiodData.foo2 = scope.foo2[0];
						scope.timeperiodData.foo3 = scope.foo3[0];
						scope.timeperiodData.bar1 = scope.bar1[0];
						scope.timeperiodData.bar2 = scope.bar2[0];
						scope.timeperiodData.bar3 = scope.bar3[0];
						scope.timeperiodData.bar4 = scope.bar4[0];
					} else {
						var keyStr = data.key;
						var valueStr = data.value;

						var keySpl = keyStr.split(' ');
						var keys = Object.keys(appConfig.getConfiguration().timeperiod.month);
						for (var i = 0, l = keys.length; i < l; i++) {
							var month = appConfig.getConfiguration().timeperiod.month[keys[i]];
							if (month.value === keySpl[0].trim()) {
								scope.foo2 = appConfig.getConfiguration().timeperiod.day;
								break;
							}
						}

						scope.timeperiodData.foo1 = getTimeperiodDataFoo(scope.foo1, keySpl[0].trim());
						scope.timeperiodData.foo2 = getTimeperiodDataFoo(scope.foo2, keySpl[1].trim());
						scope.timeperiodData.foo3 = getTimeperiodDataFoo(scope.foo3, keySpl[2].trim());

						var valueSpl = valueStr.split('-');
						setTimeperiodDataBar(scope, valueSpl);
					}
				}

				function getTimeperiodDataFoo(obj, keyStr) {
					var keys = Object.keys(obj);
					for (var i = 0, l = keys.length; i < l; i++) {
						if (obj[keys[i]].value === keyStr) {
							return obj[keys[i]];
						}
					}
				}

				function setTimeperiodDataBar(scope, valueSpl) {
					var valueSubSpl = valueSpl[0].split(':');
					scope.timeperiodData.bar1 = {'value': valueSubSpl[0].trim()};
					scope.timeperiodData.bar2 = {'value': valueSubSpl[1].trim()};
					valueSubSpl = valueSpl[1].split(':');
					scope.timeperiodData.bar3 = {'value': valueSubSpl[0].trim()};
					scope.timeperiodData.bar4 = {'value': valueSubSpl[1].trim()};
				}

				function setWatcher(scope, monthObj, weekObj) {
					scope.$watch('timeperiodData.foo1', function(newValue, oldValue) {
						if (newValue === oldValue) return;

						if (monthObj.hasOwnProperty(oldValue.text) && weekObj.hasOwnProperty(newValue.text)) {
							// scope.isWeek = true;
							scope.foo2 = appConfig.getConfiguration().timeperiod.weekday;
							scope.timeperiodData.foo2 = scope.foo2[0];
							scope.timeperiodData.foo3 = scope.foo3[0];
						} else if (weekObj.hasOwnProperty(oldValue.text) && monthObj.hasOwnProperty(newValue.text)) {
							// scope.isWeek = false;
							scope.foo2 = appConfig.getConfiguration().timeperiod.day;
							scope.timeperiodData.foo2 = scope.foo2[0];
							scope.timeperiodData.foo3 = scope.foo3[0];
						}
					});
				}

				return {
					restrict: 'E',
					replace: true,
					scope: {
						count: '=',
						getdata: '&'
					},
					templateUrl: appConfig.getConfiguration().partial + 'system.configuration.timeperiod.add_row_directive.php',
					link: function (scope, element, attrs) {
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

						setScopeData(scope);

						setTimeperiodData(scope);

						DirectiveTimeperiodFactory.register(scope.count, scope.timeperiodData);

						setWatcher(scope, monthObj, weekObj);

						scope.deleteRow = function(num) {
							angular.element('tr[count="' + num + '"]').remove();
							DirectiveTimeperiodFactory.drop(num);
						};
					}
				};
			}
		]);
	}
);