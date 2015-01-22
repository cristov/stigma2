define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('MainCtrl', [
			'$location', '$rootScope', '$scope', '$window', 'AccountFactory', 'SystemConfigurationHostFactory',
			function($location, $rootScope, $scope, $window, AccountFactory, SystemConfigurationHostFactory) {
				$scope.home = function() { $location.path(appConfig.getConfiguration().home + '/'); };
				$scope.overview = function() { $location.path(appConfig.getConfiguration().home + '/overview/'); };
				$scope.hosts = function(type) {
					if (type === undefined) {
						$rootScope.params = null;
					} else {
						$rootScope.params = {
							'state': type
						};
					}
					$location.path(appConfig.getConfiguration().home + '/hosts/');
				};
				$scope.hostsGraph = function() {
					$location.path(appConfig.getConfiguration().home + '/hosts/status');
				};
				$scope.services = function(type) {
					if (type === undefined) {
						$rootScope.params = null;
					} else {
						$rootScope.params = {
							'state': type
						};
					}
					$location.path(appConfig.getConfiguration().home + '/services/');
				};
				$scope.servicesGraph = function() {
					//
				};
				$scope.log = function() { $location.path(appConfig.getConfiguration().home + '/log/'); };
				$scope.configuration = function() { $location.path(appConfig.getConfiguration().home + '/configuration/'); };

				$scope.logout = function() {
					AccountFactory.logout()
						.then(function(data) {
							$window.location.href = appConfig.getConfiguration().home + '/login/';
						});
				};
			}
		]);
	}
);