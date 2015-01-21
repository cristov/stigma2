define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('SystemConfigurationHostCreationCtrl', [
			'$location', '$scope', 'SystemConfigurationHostFactory',
			function($location, $scope, SystemConfigurationHostFactory) {
				dragDropHelper($scope);
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
							$location.path(stigma2.getConfiguration().home + '/configuration/hosts/');
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$location.path(stigma2.getConfiguration().home + '/configuration/hosts/');
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