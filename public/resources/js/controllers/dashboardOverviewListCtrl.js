define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('DashboardOverviewListCtrl', [
			'$scope', 'DashboardOverviewFactory',
			function($scope, DashboardOverviewFactory) {
				$scope.$on('$viewContentLoaded', function() {
					DashboardOverviewFactory.list()
						.then(function(data) {
							$scope.host = data.host;
							$scope.service = data.service;
						});
				});
			}
		]);
	}
);