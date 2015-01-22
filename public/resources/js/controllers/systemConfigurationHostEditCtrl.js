define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationHostEditCtrl', [
			'$location', '$rootScope', '$scope', 'SystemConfigurationHostFactory',
			function($location, $rootScope, $scope, SystemConfigurationHostFactory) {
				dragDropHelper($scope);

				$scope.editHost = function() {
					$location.path(appConfig.getConfiguration().home + '/configuration/hosts/' + $rootScope.id + '/edit/');
				};

				$scope.updateHost = function() {
					var params = {};

					for (var k in $scope.use) {
						var key = $scope.use[k].name;
						var value = $scope.hostData[key];
						params[key] = value;
					}

					SystemConfigurationHostFactory.update($rootScope.id, params)
						.success(function(data) {
							$location.path(appConfig.getConfiguration().home + '/configuration/hosts/' + $rootScope.id + '/');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$location.path(appConfig.getConfiguration().home + '/configuration/hosts/');
				};

				SystemConfigurationHostFactory.show($rootScope.id)
					.then(function(data) {
						$scope.hostData = data.hostData;
						$scope.hostDetail = data.hostDetail;
						$scope.use = data.use;
						$scope.disuse = data.disuse;
					});
			}
		]);
	}
);