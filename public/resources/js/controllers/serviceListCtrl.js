define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('ServiceListCtrl', [
			'$scope', '$state', 'ServiceFactory',
			function($scope, $state, ServiceFactory) {
				$scope.detailHost = function(uuid) {
					$state.go('hostShow', {uuid: uuid});
				};

				$scope.detailService = function(uuid) {
					$state.go('serviceShow', {uuid: uuid});
				};

				$scope.$on('$viewContentLoaded', function() {
					ServiceFactory.list($state.params)
						.then(function(data) {
							$scope.services = data;
						});
				});
			}
		]);
	}
);