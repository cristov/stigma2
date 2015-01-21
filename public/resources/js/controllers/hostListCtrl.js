define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('HostListCtrl', [
			'$location', '$rootScope', '$scope', '$stateParams', 'HostFactory',
			function($location, $rootScope, $scope, $stateParams, HostFactory) {
				$scope.detailHost = function(id) {
					$rootScope.id = id;
					$location.path(stigma2.getConfiguration().home + '/hosts/'+ id + '/');
				};

				HostFactory.list($stateParams)
					.then(function(data) {
						$scope.hosts = data;
					});
			}
		]);
	}
);