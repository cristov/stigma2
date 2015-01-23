define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationCommandEditCtrl', [
			'$scope', '$state', 'SystemConfigurationCommandFactory',
			function($scope, $state, SystemConfigurationCommandFactory) {
				$scope.commandData = {};

				$scope.updateCommand = function(id) {
					SystemConfigurationCommandFactory.update(id, $scope.commandData)
						.success(function(data) {
							$state.go('systemConfigurationCommandList');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$state.go('systemConfigurationCommandList');
				};

				SystemConfigurationCommandFactory.show($state.params)
					.then(function(data) {
						$scope.commandData = data[0];
					});
			}
		]);
	}
);