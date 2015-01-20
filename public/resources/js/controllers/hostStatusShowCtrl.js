define(function() {
	'use strict';

	return ['$location', '$scope', 'HostFactory',
		function($location, $scope, HostFactory) {
			$scope.series = [{
				name : 'Random data',
				data : (function() {
					// generate an array of random data
					var data = [], time = (new Date()).getTime(), i;

					for( i = -999; i <= 0; i++) {
						data.push([
							time + i * 1000,
							Math.round(Math.random() * 100)
						]);
					}
					return data;
				})()
			}];
		}
	];
});