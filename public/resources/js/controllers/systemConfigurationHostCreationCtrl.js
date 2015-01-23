define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationHostCreationCtrl', [
			'$scope', '$state', 'SystemConfigurationHostFactory',
			function($scope, $state, SystemConfigurationHostFactory) {
				// dragDropHelper($scope);
				$scope.hostData = {};

				$scope.saveHost = function() {
					var params = {};

					for (var i in $scope.hostData) {
						var key = $scope.use[i].name;
						var value = $scope.hostData[i];
						params[key] = value;
					}

					SystemConfigurationHostFactory.save(params)
						.success(function(data) {
							$state.go('systemConfigurationHostList');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$state.go('systemConfigurationHostList');
				};

				SystemConfigurationHostFactory.create()
					.then(function(data) {
						$scope.use = data.use;
						$scope.disuse = data.disuse;
					});
			}
		]);
	}
);