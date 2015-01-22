define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationTimeperiodListCtrl', [
			'$location', '$rootScope', '$scope', 'SystemConfigurationTimeperiodFactory',
			function($location, $rootScope, $scope, SystemConfigurationTimeperiodFactory) {
				$scope.createTimeperiod = function() {
					$location.path(appConfig.getConfiguration().home + '/configuration/timeperiods/create/');
				};

				$scope.editTimeperiod = function(id) {
					$rootScope.id = id;
					$location.path(appConfig.getConfiguration().home + '/configuration/timeperiods/'+ id + '/edit/');
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
		]);
	}
);