define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationCommandCreationCtrl', [
			'$scope', '$state', 'SystemConfigurationCommandFactory',
			function($scope, $state, SystemConfigurationCommandFactory) {
				$scope.commandData = {};

				$scope.saveCommand = function() {
					SystemConfigurationCommandFactory.save($scope.commandData)
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
			}
		]);
	}
);