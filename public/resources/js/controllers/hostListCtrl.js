define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('HostListCtrl', [
			'$scope', '$state', 'HostFactory',
			function($scope, $state, HostFactory) {
				$scope.detailHost = function(uuid) {
					$state.go('hostShow', {uuid: uuid});
				};

				HostFactory.list($state.params)
					.then(function(data) {
						$scope.hosts = data;
					});
			}
		]);
	}
);