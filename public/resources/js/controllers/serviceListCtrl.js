define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', 'ServiceFactory',
		function($location, $rootScope, $scope, ServiceFactory) {
			$scope.detailHost = function(id) {
				$rootScope.id = id;
				$location.path(stigma2.getConfiguration().home + '/hosts/' + id + '/');
			};

			$scope.detailService = function(id) {
				$rootScope.id = id;
				$location.path(stigma2.getConfiguration().home + '/services/' + id + '/');
			};

			ServiceFactory.list($rootScope.params)
				.then(function(data) {
					$scope.services = data;
				});
		}
	];
});