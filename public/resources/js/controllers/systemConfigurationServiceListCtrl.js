define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationServiceListCtrl', [
			'$location', '$rootScope', '$scope', 'SystemConfigurationServiceFactory',
			function($location, $rootScope, $scope, SystemConfigurationServiceFactory) {
				$scope.createService = function() {
					$location.path(appConfig.getConfiguration().home + '/configuration/services/create/');
				};

				$scope.detailService = function(id) {
					$rootScope.id = id;
					$location.path(appConfig.getConfiguration().home + '/configuration/services/' + id + '/');
				};

				$scope.listHost = function(host_object_uuid) {
					$rootScope.params = {
						'object_uuid': host_object_uuid
					};
					$location.path(appConfig.getConfiguration().home + '/configuration/hosts/');
				};

				SystemConfigurationServiceFactory.list($rootScope.params)
					.then(function(data) {
						$scope.services = data;
					});
			}
		]);
	}
);