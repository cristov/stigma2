define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('HostStatusCtrl', [
			'$location', '$scope', 'HostFactory',
			function($location, $scope, HostFactory) {
				$scope.step = '1';
				$scope.periods = appConfig.getConfiguration().periods;
				$scope.statusData = {};

				$scope.cancel = function() {
					$location.path(appConfig.getConfiguration().home + '/hosts/');
				};

				$scope.continueStep2 = function() {
					$scope.step = '2';
					$scope.statusData['period'] = $scope.periods.length > 0 ? $scope.periods[0] : undefined;
				};

				$scope.showStatus = function() {
					$location.path(appConfig.getConfiguration().home + '/hosts/status/show/');
				};

				HostFactory.list()
					.then(function(data) {
						var hosts = [];
						for (var i in data) {
							var host_name = data[i].host_name;
							var object_uuid = data[i].object_uuid;
							hosts.push({'value': object_uuid, 'text': host_name});
						}
						$scope.hosts = hosts;
						$scope.statusData['host'] = $scope.hosts.length > 0 ? $scope.hosts[0] : undefined;
					});
			}
		]);
	}
);