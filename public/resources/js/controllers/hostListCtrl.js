define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('HostListCtrl', [
			'$location', '$rootScope', '$scope', 'HostFactory',
			function($location, $rootScope, $scope, HostFactory) {
				$scope.detailHost = function(id) {
					$rootScope.id = id;
					$location.path(stigma2.getConfiguration().home + '/hosts/'+ id + '/');
				};

				HostFactory.list($rootScope.params)
					.then(function(data) {
						$scope.hosts = data;
					});
			}
		]);
	}
);