define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('MainCtrl', [
			'$location', '$rootScope', '$scope', '$window', 'AccountFactory', 'SystemConfigurationHostFactory',
			function($location, $rootScope, $scope, $window, AccountFactory, SystemConfigurationHostFactory) {
				$scope.home = function() { $location.path(stigma2.getConfiguration().home + '/'); };
				$scope.overview = function() { $location.path(stigma2.getConfiguration().home + '/overview/'); };
				$scope.hosts = function(type) {
					if (type === undefined) {
						$rootScope.params = null;
					} else {
						$rootScope.params = {
							'state': type
						};
					}
					$location.path(stigma2.getConfiguration().home + '/hosts/');
				};
				$scope.hostsGraph = function() {
					$location.path(stigma2.getConfiguration().home + '/hosts/status');
				};
				$scope.services = function(type) {
					if (type === undefined) {
						$rootScope.params = null;
					} else {
						$rootScope.params = {
							'state': type
						};
					}
					$location.path(stigma2.getConfiguration().home + '/services/');
				};
				$scope.servicesGraph = function() {
					//
				};
				$scope.log = function() { $location.path(stigma2.getConfiguration().home + '/log/'); };
				$scope.configuration = function() { $location.path(stigma2.getConfiguration().home + '/configuration/'); };

				$scope.logout = function() {
					AccountFactory.logout()
						.then(function(data) {
							$window.location.href = stigma2.getConfiguration().home + '/login/';
						});
				};
			}
		]);
	}
);

define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', '$window', 'AccountFactory', 'SystemConfigurationHostFactory',
		function($location, $rootScope, $scope, $window, AccountFactory, SystemConfigurationHostFactory) {
			$scope.home = function() { $location.path(stigma2.getConfiguration().home + '/'); };
			$scope.overview = function() { $location.path(stigma2.getConfiguration().home + '/overview/'); };
			$scope.hosts = function(type) {
				if (type === undefined) {
					$rootScope.params = null;
				} else {
					$rootScope.params = {
						'state': type
					};
				}
				$location.path(stigma2.getConfiguration().home + '/hosts/');
			};
			$scope.hostsGraph = function() {
				$location.path(stigma2.getConfiguration().home + '/hosts/status');
			};
			$scope.services = function(type) {
				if (type === undefined) {
					$rootScope.params = null;
				} else {
					$rootScope.params = {
						'state': type
					};
				}
				$location.path(stigma2.getConfiguration().home + '/services/');
			};
			$scope.servicesGraph = function() {
				//
			};
			$scope.log = function() { $location.path(stigma2.getConfiguration().home + '/log/'); };
			$scope.configuration = function() { $location.path(stigma2.getConfiguration().home + '/configuration/'); };

			$scope.logout = function() {
				AccountFactory.logout()
					.then(function(data) {
						$window.location.href = stigma2.getConfiguration().home + '/login/';
					});
			};
		}
	];
});