define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationServiceCreationCtrl', [
			'$location', '$scope', 'SystemConfigurationServiceFactory',
			function($location, $scope, SystemConfigurationServiceFactory) {
				dragDropHelper($scope);
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
							$location.path(appConfig.getConfiguration().home + '/configuration/services/');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$location.path(appConfig.getConfiguration().home + '/configuration/services/');
				};

				SystemConfigurationServiceFactory.create()
					.then(function(data) {
						$scope.use = data.use;
						$scope.disuse = data.disuse;
					});
			}
		]);
	}
);