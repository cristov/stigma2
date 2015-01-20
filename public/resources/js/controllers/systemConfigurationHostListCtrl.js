define(function() {
	'use strict';

	return ['$location', '$rootScope', '$scope', 'SystemConfigurationHostFactory', 'SystemConfigurationHostgroupFactory',
		function($location, $rootScope, $scope, SystemConfigurationHostFactory, SystemConfigurationHostgroupFactory) {
			$scope.hasActive = false;
			$scope.hostgroup_name = '';
			$scope.hostgroup_uuid = '';

			$scope.createHost = function() {
				$location.path(stigma2.getConfiguration().home + '/configuration/hosts/create/');
			};

			$scope.detailHost = function(id) {
				$rootScope.id = id;
				$location.path(stigma2.getConfiguration().home + '/configuration/hosts/' + id + '/');
			};

			$scope.deleteHost = function(id) {
				SystemConfigurationHostFactory.remove(id)
					.success(function(data) {
						SystemConfigurationHostFactory.list()
							.then(function(hosts) {
								$scope.hosts = hosts;
							});
					});
			};

			$scope.listService = function(object_uuid) {
				$rootScope.params = {
					'host_object_uuid': object_uuid
				};
				$location.path(stigma2.getConfiguration().home + '/configuration/services/');
			};

			$scope.clickHostgroup = function(group) {
				var buttons = angular.element('div[data-toggle="buttons"]').children();
				buttons.removeClass('active');
				angular.element(':checked').prop('checked', false);

				if ($scope.hostgroup_uuid === group.object_uuid) {
					var label = angular.element('label[name="' + group.object_uuid + '"]');
					label.toggleClass('active');
					$scope.hostgroup_uuid = '';
				} else {
					$scope.hostgroup_uuid = group.object_uuid;
					$scope.hostgroup_name = group.hostgroup_name;

					SystemConfigurationHostgroupFactory.show(group.object_uuid)
						.then(function(data) {
							var hostgroupDetail = data.hostgroupDetail;
							for (var i in hostgroupDetail) {
								var member = hostgroupDetail[i].member;
								var checkbox = angular.element('input[type="checkbox"][name="' + member + '"]');
								checkbox.prop('checked', true);
							}
						});
				}
			};

			$scope.createHostgroup = function() {
				var params = {
					'hostgroup_name': $scope.hostgroup_name
				};

				var checkboxes = angular.element(':checked');
				var members = [];
				for (var i = 0; i < checkboxes.length; i++) {
					members.push(checkboxes[i].value);
				}
				params['members'] = members;
				console.log(params);

				SystemConfigurationHostgroupFactory.save(params)
					.success(function(data) {
						console.log(data);
						$scope.hostgroups = data.hostgroups;

						$scope.hostgroup_name = '';
						$scope.hostgroup_uuid = '';
						checkboxes.prop('checked', false);
					})
					.error(function(data) {
						console.log(data);
					});
			};

			$scope.updateHostgroup = function() {
			};

			$scope.deleteHostgroup = function() {
			};

			$scope.$watch('hostgroup_uuid', function(newValue, oldValue) {
				if (newValue === oldValue) return;

				if (newValue === '') {
					// console.log('No one has active class');
					$scope.hasActive = false;
					$scope.hostgroup_name = '';
				} else {
					// console.log('Someone has active class');
					$scope.hasActive = true;
				}
			});

			SystemConfigurationHostFactory.list($rootScope.params)
				.then(function(data) {
					$scope.hosts = data;
				});

			SystemConfigurationHostgroupFactory.list()
				.then(function(hostgroups) {
					$scope.hostgroups = hostgroups;
					console.log($scope.hostgroups);
				});
		}
	];
});