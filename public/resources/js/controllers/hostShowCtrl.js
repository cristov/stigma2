define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', 'HostFactory',
		function($location, $rootScope, $scope, HostFactory) {
			$scope.cancel = function() {
				$location.path(stigma2.getConfiguration().home + '/hosts/');
			};

			HostFactory.show($rootScope.id)
				.then(function(data) {
					$scope.host = data.host;
				});
		}
	];
});