define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('HostListCtrl', [
			'$rootScope', '$scope', '$state', '$stateParams', 'HostFactory',
			function($rootScope, $scope, $state, $stateParams, HostFactory) {
				$scope.detailHost = function(id) {
					$rootScope.id = id;
					$state.go('hostShow', {id: id});
				};

				HostFactory.list($stateParams)
					.then(function(data) {
						$scope.hosts = data;
					});
			}
		]);
	}
);