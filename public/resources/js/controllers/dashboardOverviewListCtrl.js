define(['module'],
	function(controllers) {
		'use strict';

		controllers.controller('DashboardOverviewListCtrl', [
			'$scope', 'DashboardOverviewFactory',
			function($scope, DashboardOverviewFactory) {
				DashboardOverviewFactory.list()
					.then(function(data) {
						$scope.host = data.host;
						$scope.service = data.service;
					});
			}
		]);
	}
);

// define(function() {
// 	'use strict';

// 	return ['$scope', 'DashboardOverviewFactory',
// 		function($scope, DashboardOverviewFactory) {
// 			DashboardOverviewFactory.list()
// 				.then(function(data) {
// 					$scope.host = data.host;
// 					$scope.service = data.service;
// 				});
// 		}
// 	];
// });