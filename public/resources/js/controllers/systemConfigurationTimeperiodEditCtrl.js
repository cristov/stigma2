define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationTimeperiodEditCtrl', [
			'$compile', '$scope', '$state', 'SystemConfigurationTimeperiodFactory',
			function($compile, $scope, $state, SystemConfigurationTimeperiodFactory) {
				$scope.count = 0;
				$scope.preTimeperiodData = {};
				$scope.timeperiodData = {};

				$scope.addRow = function(data) {
					$scope.preTimeperiodData[++$scope.count] = data;
					var content = $compile('<x-timeperiod-add-row count="' + $scope.count + '" getdata="getPreTimeperiodData(' + $scope.count + ')"></x-timeperiod-add-row>')($scope);
					$('tbody').append(content);
				};

				$scope.getPreTimeperiodData = function(count) {
					return $scope.preTimeperiodData[count];
				};

				$scope.updateTimeperiod = function(id) {
					SystemConfigurationTimeperiodFactory.update(id, $scope.timeperiodData)
						.success(function(data) {
							$state.go('systemConfigurationTimeperiodList');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$state.go('systemConfigurationTimeperiodList');
				};

				SystemConfigurationTimeperiodFactory.edit($state.params.id)
					.then(function(data) {
						for (var i in data) {
							var timeperiod = data[i];
							switch (timeperiod.key) {
								case 'timeperiod_name':
									$scope.timeperiodData.timeperiod_name = timeperiod.timeperiod_name;
									break;
								case 'alias':
									$scope.timeperiodData.alias = timeperiod.alias;
									break;
								default:
									$scope.addRow(timeperiod);
									break;
							}
						}
						$scope.timeperiodData.id = data[0].id;
					});
			}
		]);
	}
);