define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationCommandEditCtrl', [
			'$location', '$rootScope', '$scope', 'SystemConfigurationCommandFactory',
			function($location, $rootScope, $scope, SystemConfigurationCommandFactory) {
				$scope.commandData = {};

				$scope.updateCommand = function(id) {
					SystemConfigurationCommandFactory.update(id, $scope.commandData)
						.success(function(data) {
							$location.path(appConfig.getConfiguration().home + '/configuration/commands/');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$location.path(appConfig.getConfiguration().home + '/configuration/commands/');
				};

				SystemConfigurationCommandFactory.show($rootScope.id)
					.then(function(data) {
						$scope.commandData = data[0];
					});
			}
		]);
	}
);