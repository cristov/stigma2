define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('ServiceShowCtrl', [
			'$scope', '$state', 'ServiceFactory',
			function($scope, $state, ServiceFactory) {
				$scope.cancel = function() {
					$state.go('serviceList');
				};

				ServiceFactory.show($state.params)
					.then(function(data) {
						$scope.service = data.service;
					});
			}
		]);
	}
);