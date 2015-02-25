define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('HostShowCtrl', [
			'$scope', '$state', 'HostFactory',
			function($scope, $state, HostFactory) {
				$scope.cancel = function() {
					$state.go('hostList');
				};

				$scope.$on('$viewContentLoaded', function() {
					HostFactory.show($state.params.uuid)
						.then(function(data) {
							$scope.host = data.host;
						});
				});
			}
		]);
	}
);