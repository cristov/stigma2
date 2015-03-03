define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationServiceListCtrl', [
			'$scope', '$state', 'SystemConfigurationServiceFactory',
			function($scope, $state, SystemConfigurationServiceFactory) {
				$scope.createService = function() {
					$state.go('systemConfigurationServiceCreation');
				};

				$scope.editService = function(id) {
					$state.go('systemConfigurationServiceEdit', {id: id});
				};

				$scope.deleteService = function(id) {
					SystemConfigurationServiceFactory.remove(id)
						.success(function(data) {
							SystemConfigurationServiceFactory.list()
								.then(function(services) {
									$scope.services = services;
								});
						});
				};

				$scope.listHost = function(object_uuid) {
					$state.go('systemConfigurationHostList', {object_uuid: object_uuid});
				};

				SystemConfigurationServiceFactory.list($state.params)
					.then(function(data) {
						$scope.services = data;
					});
			}
		]);
	}
);