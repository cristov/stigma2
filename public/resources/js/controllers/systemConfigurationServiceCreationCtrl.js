define(['./module', '../app-config', './ngDraggableCtrl'],
	function(controllers, appConfig, draggable) {
		'use strict';

		controllers.controller('SystemConfigurationServiceCreationCtrl', [
			'$scope', '$state', 'SystemConfigurationServiceFactory',
			function($scope, $state, SystemConfigurationServiceFactory) {
				draggable.setScope($scope);
				draggable.init();
				$scope.serviceData = {};

				$scope.saveService = function() {
					var params = {};

					for (var i in $scope.serviceData) {
						var key = $scope.use[i].name;
						var value = $scope.serviceData[i];
						params[key] = value;
					}

					SystemConfigurationServiceFactory.save(params)
						.success(function(data) {
							$state.go('systemConfigurationServiceList');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$state.go('systemConfigurationServiceList');
				};

				$scope.$on('$viewContentLoaded', function() {
					SystemConfigurationServiceFactory.create()
						.then(function(data) {
							$scope.use = data.use;
							$scope.disuse = data.disuse;
						});
				});
			}
		]);
	}
);