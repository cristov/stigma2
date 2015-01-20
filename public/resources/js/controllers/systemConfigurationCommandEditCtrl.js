define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', 'SystemConfigurationCommandFactory',
		function($location, $rootScope, $scope, SystemConfigurationCommandFactory) {
			$scope.commandData = {};

			$scope.updateCommand = function(id) {
				SystemConfigurationCommandFactory.update(id, $scope.commandData)
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

			SystemConfigurationCommandFactory.show($rootScope.id)
				.then(function(data) {
					$scope.commandData = data[0];
				});
		}
	];
});