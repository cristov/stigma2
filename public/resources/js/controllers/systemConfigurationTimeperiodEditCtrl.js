define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationTimeperiodEditCtrl', [
			'$compile', '$scope', '$state', 'SystemConfigurationTimeperiodFactory',
			function($compile, $scope, $state, SystemConfigurationTimeperiodFactory) {
				$scope.count = 0;
				$scope.timeperiodData = {};

				$scope.addRow = function() {
					$scope.count++;
					var content = $compile('<x-timeperiod-add-row count="' + $scope.count + '"></x-timeperiod-add-row>')($scope);
					$('tbody').append(content);
				};

				$scope.updateCommand = function(id) {
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
						console.log(data);
						for (var i in data) {
							// console.log(data[i]);
							$scope.addRow(data[i]);
						}
						$scope.timeperiodData = data;
					});
			}
		]);
	}
);