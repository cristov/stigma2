define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('SystemConfigurationCommandListCtrl', [
			'$location', '$rootScope', '$scope', 'SystemConfigurationCommandFactory',
			function($location, $rootScope, $scope, SystemConfigurationCommandFactory) {
				$scope.createCommand = function() {
					$location.path(stigma2.getConfiguration().home + '/configuration/commands/create/');
				};

				$scope.editCommand = function(id) {
					$rootScope.id = id;
					$location.path(stigma2.getConfiguration().home + '/configuration/commands/'+ id + '/edit/');
				};

				$scope.deleteCommand = function(id) {
					SystemConfigurationCommandFactory.remove(id)
						.success(function(data) {
							SystemConfigurationCommandFactory.list()
								.then(function(commands) {
									$scope.commands = commands;
								});
						});
				};

				SystemConfigurationCommandFactory.list()
					.then(function(data) {
						$scope.commands = data;
					});
			}
		]);
	}
);