define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationCommandListCtrl', [
			'$scope', '$state', 'SystemConfigurationCommandFactory',
			function($scope, $state, SystemConfigurationCommandFactory) {
				$scope.createCommand = function() {
					$state.go('systemConfigurationCommandCreation');
				};

				$scope.editCommand = function(id) {
					$state.go('systemConfigurationCommandEdit', {id: id});
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