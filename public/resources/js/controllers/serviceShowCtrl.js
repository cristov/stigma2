define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('ServiceShowCtrl', [
			'$location', '$rootScope', '$scope', 'ServiceFactory',
			function($location, $rootScope, $scope, ServiceFactory) {
				$scope.cancel = function() {
					$location.path(appConfig.getConfiguration().home + '/services/');
				};

				ServiceFactory.show($rootScope.id)
					.then(function(data) {
						$scope.service = data.service;
					});
			}
		]);
	}
);