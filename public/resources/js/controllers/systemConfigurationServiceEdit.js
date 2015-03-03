define(['./module', '../app-config', './ngDraggableCtrl'],
	function(controllers, appConfig, draggable) {
		'use strict';

		controllers.controller('SystemConfigurationServiceEditCtrl', [
			'$scope', '$state', 'SystemConfigurationServiceFactory',
			function($scope, $state, SystemConfigurationServiceFactory) {
				draggable.setScope($scope);
				draggable.init();

				$scope.updateService = function() {
					var params = {};

					for (var k in $scope.use) {
						var key = $scope.use[k].name;
						var value = $scope.serviceData[key];
						params[key] = value;
					}

					SystemConfigurationServiceFactory.update($state.params.id, params)
						.success(function(data) {
							$state.go('systemConfigurationServiceShow', {id: $state.params.id});
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$state.go('systemConfigurationServiceList');
				};

				SystemConfigurationServiceFactory.edit($state.params.id)
					.then(function(data) {
						$scope.serviceData = data.serviceData;
						$scope.serviceDetail = data.serviceDetail;
						$scope.use = data.use;
						$scope.disuse = data.disuse;
					});
			}
		]);
	}
);