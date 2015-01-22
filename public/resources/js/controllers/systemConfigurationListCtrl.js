define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationListCtrl', [
			'$scope', '$state',
			function($scope, $state) {
				$scope.objects = [{ 'value' : '1', 'text' : 'Hosts' }, { 'value' : '2', 'text' : 'Services' }, {'value' : '9', 'text' : 'Timeperiods'}, { 'value' : '12', 'text' : 'Commands' }];
				$scope.type = $scope.objects[0];

				$scope.continueToNextStep = function() {
					switch ($scope.type.value) {
						case '1' :
							$state.go('systemConfigurationHostList'); break;
						case '2' :
							$state.go('systemConfigurationServiceList'); break;
						case '9' :
							$state.go('systemConfigurationTimeperiodList'); break;
						case '12' :
							$state.go('systemConfigurationCommandList'); break;
					}
				};
			}
		]);
	}
);