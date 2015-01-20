define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', 'SystemConfigurationTimeperiodFactory',
		function($location, $rootScope, $scope, SystemConfigurationTimeperiodFactory) {
			$scope.createTimeperiod = function() {
				$location.path(stigma2.getConfiguration().home + '/configuration/timeperiods/create/');
			};

			$scope.editTimeperiod = function(id) {
				$rootScope.id = id;
				$location.path(stigma2.getConfiguration().home + '/configuration/timeperiods/'+ id + '/edit/');
			};

			$scope.deleteTimeperiod = function(id) {
				SystemConfigurationTimeperiodFactory.remove(id)
					.success(function(data) {
						SystemConfigurationTimeperiodFactory.list()
							.then(function(timeperiods) {
								$scope.timeperiods = timeperiods;
							});
					});
			};

			SystemConfigurationTimeperiodFactory.list()
				.then(function(data) {
					$scope.timeperiods = data;
				});
		}
	];
});