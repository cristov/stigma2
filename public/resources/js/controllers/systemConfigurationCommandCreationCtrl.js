define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('SystemConfigurationCommandCreationCtrl', [
			'$location', '$scope', 'SystemConfigurationCommandFactory',
			function($location, $scope, SystemConfigurationCommandFactory) {
				$scope.commandData = {};

				$scope.saveCommand = function() {
					SystemConfigurationCommandFactory.save($scope.commandData)
						.success(function(data) {
							$location.path(stigma2.getConfiguration().home + '/configuration/commands/');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$location.path(stigma2.getConfiguration().home + '/configuration/commands/');
				};
			}
		]);
	}
);