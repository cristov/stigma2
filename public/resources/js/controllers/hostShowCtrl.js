define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('HostShowCtrl', [
			'$location', '$rootScope', '$scope', '$stateParams', 'HostFactory',
			function($location, $rootScope, $scope, $stateParams, HostFactory) {
				$scope.cancel = function() {
					$location.path(appConfig.getConfiguration().home + '/hosts/');
				};
				console.log('HostShowCtrl');
				console.log($stateParams);

				HostFactory.show($stateParams)
					.then(function(data) {
						$scope.host = data.host;
					});
			}
		]);
	}
);