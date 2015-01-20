define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', 'ServiceFactory',
		function($location, $rootScope, $scope, ServiceFactory) {
			$scope.cancel = function() {
				$location.path(stigma2.getConfiguration().home + '/services/');
			};

			ServiceFactory.show($rootScope.id)
				.then(function(data) {
					$scope.service = data.service;
				});
		}
	];
});