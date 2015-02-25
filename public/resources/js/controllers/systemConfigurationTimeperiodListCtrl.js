define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationTimeperiodListCtrl', [
			'$scope', '$state', 'SystemConfigurationTimeperiodFactory',
			function($scope, $state, SystemConfigurationTimeperiodFactory) {
				$scope.createTimeperiod = function() {
					$state.go('systemConfigurationTimeperiodCreation');
				};

				$scope.editTimeperiod = function(id) {
					$state.go('systemConfigurationTimeperiodEdit', {id: id});
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

				$scope.$on('$viewContentLoaded', function() {
					SystemConfigurationTimeperiodFactory.list()
						.then(function(data) {
							$scope.timeperiods = data;
						});
				});
			}
		]);
	}
);