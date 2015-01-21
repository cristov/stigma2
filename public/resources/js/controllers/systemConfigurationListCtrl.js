define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('SystemConfigurationListCtrl', [
			'$location', '$scope',
			function($location, $scope) {
				$scope.objects = [{ 'value' : '1', 'text' : 'Hosts' }, { 'value' : '2', 'text' : 'Services' }, {'value' : '9', 'text' : 'Timeperiods'}, { 'value' : '12', 'text' : 'Commands' }];
				$scope.type = $scope.objects[0];

				$scope.continueToNextStep = function() {
					switch ($scope.type.value) {
						case '1' :
							$location.path(stigma2.getConfiguration().home + '/configuration/hosts/'); break;
						case '2' :
							$location.path(stigma2.getConfiguration().home + '/configuration/services/'); break;
						case '9' :
							$location.path(stigma2.getConfiguration().home + '/configuration/timeperiods/'); break;
						case '12' :
							$location.path(stigma2.getConfiguration().home + '/configuration/commands/'); break;
					}
				};
			}
		]);
	}
);