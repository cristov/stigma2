define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationCommandCreationCtrl', [
			'$location', '$scope', 'SystemConfigurationCommandFactory',
			function($location, $scope, SystemConfigurationCommandFactory) {
				$scope.commandData = {};

				$scope.saveCommand = function() {
					SystemConfigurationCommandFactory.save($scope.commandData)
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
			}
		]);
	}
);