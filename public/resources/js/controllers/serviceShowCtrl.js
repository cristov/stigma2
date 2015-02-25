define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('ServiceShowCtrl', [
			'$scope', '$state', 'ServiceFactory',
			function($scope, $state, ServiceFactory) {
				$scope.cancel = function() {
					$state.go('serviceList');
				};

				$scope.$on('$viewContentLoaded', function() {
					ServiceFactory.show($state.params.uuid)
						.then(function(data) {
							$scope.service = data.service;
						});
				});
			}
		]);
	}
);