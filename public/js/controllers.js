mainApp.controller("MainCtrl", ["$location", "$scope", "$window", "AccountFactory",
	function($location, $scope, $window, AccountFactory) {
		$scope.home = function() {
			$location.path(stigma2.getConfiguration().home);
		};

		$scope.logout = function() {
			AccountFactory.logout()
				.then(function(data) {
					$window.location.href = stigma2.getConfiguration().login;
				});
		};
	}]);

mainApp.controller("LoginCtrl", ["$scope", "$window", "AccountFactory",
	function($scope, $window, AccountFactory) {
		$scope.loginData = {};

		$scope.login = function() {
			AccountFactory.login($scope.loginData)
				.success(function(data) {
					if (data.success) {
						$window.location.href = stigma2.getConfiguration().home;
					} else {
						$scope.messages = data.messages;
					}
				})
				.error(function(data) {
					console.log(data);
				});
		};
	}]);

mainApp.controller("HomeCtrl", ["$scope",
	function($scope) {
		$scope.message = "Everyone come and see how good I look!";
	}]);