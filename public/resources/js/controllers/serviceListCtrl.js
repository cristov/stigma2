define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('ServiceListCtrl', [
			'$location', '$rootScope', '$scope', '$stateParams', 'ServiceFactory',
			function($location, $rootScope, $scope, $stateParams, ServiceFactory) {
				$scope.detailHost = function(id) {
					$rootScope.id = id;
					$location.path(appConfig.getConfiguration().home + '/hosts/' + id + '/');
				};

				$scope.detailService = function(id) {
					$rootScope.id = id;
					$location.path(appConfig.getConfiguration().home + '/services/' + id + '/');
				};

				ServiceFactory.list($stateParams)
					.then(function(data) {
						$scope.services = data;
					});
			}
		]);
	}
);