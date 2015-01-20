define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', 'SystemConfigurationServiceFactory',
		function($location, $rootScope, $scope, SystemConfigurationServiceFactory) {
			$scope.createService = function() {
				$location.path(stigma2.getConfiguration().home + '/configuration/services/create/');
			};

			$scope.detailService = function(id) {
				$rootScope.id = id;
				$location.path(stigma2.getConfiguration().home + '/configuration/services/' + id + '/');
			};

			$scope.listHost = function(host_object_uuid) {
				$rootScope.params = {
					'object_uuid': host_object_uuid
				};
				$location.path(stigma2.getConfiguration().home + '/configuration/hosts/');
			};

			SystemConfigurationServiceFactory.list($rootScope.params)
				.then(function(data) {
					$scope.services = data;
				});
		}
	];
});