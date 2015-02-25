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

				$scope.$on('$viewContentLoaded', function() {
					SystemConfigurationTimeperiodFactory.edit($state.params.id)
						.then(function(data) {
							for (var i in data) {
								$scope.addRow(data[i]);
							}
							// $scope.timeperiodData = data;
						});
				});
			}
		]);
	}
);