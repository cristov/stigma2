define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('HomeCtrl', [
			'$scope',
			function($scope) {
				$scope.message = 'Everyone come and see how good I look!';
			}
		]);
	}
);