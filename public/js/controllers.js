loginApp.controller("LoginCtrl", ["$scope", "$window", "AccountFactory",
	function($scope, $window, AccountFactory) {
		$scope.loginData = {};

		$scope.login = function() {
			AccountFactory.login($scope.loginData)
				.success(function(data) {
					if (data.success) {
						$window.location.href = stigma2.getConfiguration().home + "/";
					} else {
						$scope.messages = data.messages;
					}
				})
				.error(function(data) {
					console.log(data);
				});
		};
	}]);

mainApp.controller("MainCtrl", ["$location", "$rootScope", "$scope", "$window", "AccountFactory", "SystemConfigurationHostFactory",
	function($location, $rootScope, $scope, $window, AccountFactory, SystemConfigurationHostFactory) {
		$scope.home = function() { $location.path(stigma2.getConfiguration().home + "/"); };
		$scope.overview = function() { $location.path(stigma2.getConfiguration().home + "/overview/"); };
		$scope.hosts = function(type) {
			if (type === undefined) {
				$rootScope.params = null;
			} else {
				$rootScope.params = {
					"state": type
				};
			}
			$location.path(stigma2.getConfiguration().home + "/hosts/");
		};
		$scope.hostsGraph = function() {
			$location.path(stigma2.getConfiguration().home + "/hosts/status");
		};
		$scope.services = function(type) {
			if (type === undefined) {
				$rootScope.params = null;
			} else {
				$rootScope.params = {
					"state": type
				};
			}
			$location.path(stigma2.getConfiguration().home + "/services/");
		};
		$scope.servicesGraph = function() {
			//
		};
		$scope.log = function() { $location.path(stigma2.getConfiguration().home + "/log/"); };
		$scope.configuration = function() { $location.path(stigma2.getConfiguration().home + "/configuration/"); };

		$scope.logout = function() {
			AccountFactory.logout()
				.then(function(data) {
					$window.location.href = stigma2.getConfiguration().home + "/login/";
				});
		};
	}]);

mainApp.controller("HomeCtrl", ["$scope",
	function($scope) {
		$scope.message = "Everyone come and see how good I look!";
	}]);

mainApp.controller("DashboardOverviewListCtrl", ["$location", "$scope", "DashboardOverviewFactory",
	function($location, $scope, DashboardOverviewFactory) {
		DashboardOverviewFactory.list()
			.then(function(data) {
				$scope.host = data.host;
				$scope.service = data.service;
			});
	}]);

mainApp.controller("HostListCtrl", ["$location", "$rootScope", "$scope", "HostFactory",
	function($location, $rootScope, $scope, HostFactory) {
		$scope.detailHost = function(id) {
			$rootScope.id = id;
			$location.path(stigma2.getConfiguration().home + "/hosts/"+ id + "/");
		};

		HostFactory.list($rootScope.params)
			.then(function(data) {
				$scope.hosts = data;
			});
	}]);

mainApp.controller("HostShowCtrl", ["$location", "$rootScope", "$scope", "HostFactory",
	function($location, $rootScope, $scope, HostFactory) {
		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/hosts/");
		};

		HostFactory.show($rootScope.id)
			.then(function(data) {
				$scope.host = data.host;
			});
	}]);

mainApp.controller("HostStatusCtrl", ["$location", "$scope", "HostFactory",
	function($location, $scope, HostFactory) {
		$scope.step = "1";
		$scope.periods = stigma2.getConfiguration().periods;
		$scope.statusData = {};

		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/hosts/");
		};

		$scope.continueStep2 = function() {
			$scope.step = "2";
			$scope.statusData["period"] = $scope.periods.length > 0 ? $scope.periods[0] : undefined;
		};

		$scope.showStatus = function() {
			$location.path(stigma2.getConfiguration().home + "/hosts/status/show/");
		};

		HostFactory.list()
			.then(function(data) {
				var hosts = [];
				for (var i in data) {
					var host_name = data[i].host_name;
					var object_uuid = data[i].object_uuid;
					hosts.push({"value": object_uuid, "text": host_name});
				}
				$scope.hosts = hosts;
				$scope.statusData["host"] = $scope.hosts.length > 0 ? $scope.hosts[0] : undefined;
			});
	}]);

mainApp.controller("HostStatusShowCtrl", ["$location", "$scope", "HostFactory",
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
	}]);

mainApp.controller("ServiceListCtrl", ["$location", "$rootScope", "$scope", "ServiceFactory",
	function($location, $rootScope, $scope, ServiceFactory) {
		$scope.detailHost = function(id) {
			$rootScope.id = id;
			$location.path(stigma2.getConfiguration().home + "/hosts/" + id + "/");
		};

		$scope.detailService = function(id) {
			$rootScope.id = id;
			$location.path(stigma2.getConfiguration().home + "/services/" + id + "/");
		};

		ServiceFactory.list($rootScope.params)
			.then(function(data) {
				$scope.services = data;
			});
	}]);

mainApp.controller("ServiceShowCtrl", ["$location", "$rootScope", "$scope", "ServiceFactory",
	function($location, $rootScope, $scope, ServiceFactory) {
		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/services/");
		};

		ServiceFactory.show($rootScope.id)
			.then(function(data) {
				$scope.service = data.service;
			});
	}]);

/*
mainApp.controller("ReportTrendListCtrl", ["$location", "$scope", "SystemConfigurationHostFactory", "SystemConfigurationServiceFactory",
	function($location, $scope, SystemConfigurationHostFactory, SystemConfigurationServiceFactory) {
		$scope.step = "1";
		$scope.types = [{ "value": 1, "text": "Host" }, { "value": 2, "text": "Service" }];
		$scope.periods = [
			{ "value": 1, "text": "Today" }, { "value": 2, "text": "Last 24 Hours" },
			{ "value": 3, "text": "Yesterday" }, { "value": 4, "text": "This Week" },
			{ "value": 5, "text": "Last 7 Days" }, { "value": 6, "text": "Last Week" },
			{ "value": 7, "text": "This Month" }, { "value": 8, "text": "Last 31 Days" },
			{ "value": 9, "text": "Last Month" }, { "value": 10, "text": "This Year" },
			{ "value": 11, "text": "Last Year" }, { "value": 12, "text": "Custom Period" }
		];
		$scope.trendData = { type: $scope.types.length > 0 ? $scope.types[0] : undefined };

		$scope.continueStep2 = function() {
			var factory = SystemConfigurationHostFactory;
			if ($scope.trendData.type.value == 2) factory = SystemConfigurationServiceFactory;

			factory.list()
				.then(function(data) {
					var objects = [];
					for (var i in data) {
						var host_name = data[i].host_name;
						if (data[i].service_name != null) host_name += ";" + data[i].service_name;
						var id = data[i].id;
						objects.push({"value": id, "text": host_name});
					}
					$scope.objects = objects;
					$scope.step = "2";
					$scope.trendData["object"] = $scope.objects.length > 0 ? $scope.objects[0] : undefined;
				});
		};

		$scope.continueStep3 = function() {
			$scope.step = "3";
			$scope.trendData["period"] = $scope.periods.length > 0 ? $scope.periods[0] : undefined;
		};

		$scope.createReport = function() {
			$location.path(stigma2.getConfiguration().home + "/trends/show/");
		};
	}]);

mainApp.controller("ReportTrendShowCtrl", ["$scope",
	function($scope) {
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
	}]);
*/

mainApp.controller("ReportLogListCtrl", ["$location", "$rootScope", "$scope", "AccountFactory",
	function($location, $rootScope, $scope, AccountFactory) {
		//
	}]);

mainApp.controller("SystemConfigurationListCtrl", ["$location", "$scope",
	function($location, $scope) {
		$scope.objects = [{ "value" : "1", "text" : "Hosts" }, { "value" : "2", "text" : "Services" }, {"value" : "9", "text" : "Timeperiods"}, { "value" : "12", "text" : "Commands" }];
		$scope.type = $scope.objects[0];

		$scope.continueToNextStep = function() {
			switch ($scope.type.value) {
				case "1" :
					$location.path(stigma2.getConfiguration().home + "/configuration/hosts/"); break;
				case "2" :
					$location.path(stigma2.getConfiguration().home + "/configuration/services/"); break;
				case "9" :
					$location.path(stigma2.getConfiguration().home + "/configuration/timeperiods/"); break;
				case "12" :
					$location.path(stigma2.getConfiguration().home + "/configuration/commands/"); break;
			}
		};
	}]);

mainApp.controller("SystemConfigurationCommandListCtrl", ["$location", "$rootScope", "$scope", "SystemConfigurationCommandFactory",
	function($location, $rootScope, $scope, SystemConfigurationCommandFactory) {
		$scope.createCommand = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/commands/create/");
		};

		$scope.editCommand = function(id) {
			$rootScope.id = id;
			$location.path(stigma2.getConfiguration().home + "/configuration/commands/"+ id + "/edit/");
		};

		$scope.deleteCommand = function(id) {
			SystemConfigurationCommandFactory.remove(id)
				.success(function(data) {
					SystemConfigurationCommandFactory.list()
						.then(function(commands) {
							$scope.commands = commands;
						});
				});
		};

		SystemConfigurationCommandFactory.list()
			.then(function(data) {
				$scope.commands = data;
			});
	}]);

mainApp.controller("SystemConfigurationCommandCreationCtrl", ["$location", "$scope", "SystemConfigurationCommandFactory",
	function($location, $scope, SystemConfigurationCommandFactory) {
		$scope.commandData = {};

		$scope.saveCommand = function() {
			SystemConfigurationCommandFactory.save($scope.commandData)
				.success(function(data) {
					$location.path(stigma2.getConfiguration().home + "/configuration/commands/");
				})
				.error(function(data) {
					console.log(data);
				});
		};

		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/commands/");
		};
	}]);

mainApp.controller("SystemConfigurationCommandEditCtrl", ["$location", "$rootScope", "$scope", "SystemConfigurationCommandFactory",
	function($location, $rootScope, $scope, SystemConfigurationCommandFactory) {
		$scope.commandData = {};

		$scope.updateCommand = function(id) {
			SystemConfigurationCommandFactory.update(id, $scope.commandData)
				.success(function(data) {
					$location.path(stigma2.getConfiguration().home + "/configuration/commands/");
				})
				.error(function(data) {
					console.log(data);
				});
		};

		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/commands/");
		};

		SystemConfigurationCommandFactory.show($rootScope.id)
			.then(function(data) {
				$scope.commandData = data[0];
			});
	}]);

mainApp.controller("SystemConfigurationHostListCtrl", ["$location", "$rootScope", "$scope", "SystemConfigurationHostFactory",
	function($location, $rootScope, $scope, SystemConfigurationHostFactory) {
		$scope.groups = [{
			hostgroup_name: "Group 1",
			object_uuid: "host_group_1_object_uuid"
		}, {
			hostgroup_name: "Group 2",
			object_uuid: "host_group_2_object_uuid"
		}, {
			hostgroup_name: "Group 3",
			object_uuid: "host_group_3_object_uuid"
		}, {
			hostgroup_name: "Group 4",
			object_uuid: "host_group_4_object_uuid"
		}, {
			hostgroup_name: "Group 5",
			object_uuid: "host_group_5_object_uuid"
		}, {
			hostgroup_name: "Group 6",
			object_uuid: "host_group_6_object_uuid"
		}, {
			hostgroup_name: "Group 7",
			object_uuid: "host_group_7_object_uuid"
		}, {
			hostgroup_name: "Group 8",
			object_uuid: "host_group_8_object_uuid"
		}, {
			hostgroup_name: "Group 9",
			object_uuid: "host_group_9_object_uuid"
		}, {
			hostgroup_name: "Group 10",
			object_uuid: "host_group_10_object_uuid"
		}, {
			hostgroup_name: "Group 11",
			object_uuid: "host_group_11_object_uuid"
		}];
		$scope.radioModel = 'Middle';

		$scope.createHost = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/hosts/create/");
		};

		$scope.detailHost = function(id) {
			$rootScope.id = id;
			$location.path(stigma2.getConfiguration().home + "/configuration/hosts/" + id + "/");
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
				"host_object_uuid": object_uuid
			};
			$location.path(stigma2.getConfiguration().home + "/configuration/services/");
		};

		SystemConfigurationHostFactory.list($rootScope.params)
			.then(function(data) {
				$scope.hosts = data;
			});
	}]);

mainApp.controller("SystemConfigurationHostCreationCtrl", ["$location", "$scope", "SystemConfigurationHostFactory",
	function($location, $scope, SystemConfigurationHostFactory) {
		dragDropHelper($scope);
		$scope.hostData = {};

		$scope.saveHost = function() {
			var params = {};

			for (var i in $scope.hostData) {
				var key = $scope.use[i].name;
				var value = $scope.hostData[i];
				params[key] = value;
			}

			SystemConfigurationHostFactory.save(params)
				.success(function(data) {
					$location.path(stigma2.getConfiguration().home + "/configuration/hosts/");
				})
				.error(function(data) {
					console.log(data);
				});
		};

		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/hosts/");
		};

		SystemConfigurationHostFactory.create()
			.then(function(data) {
				$scope.use = data.use;
				$scope.disuse = data.disuse;
			});
	}]);

mainApp.controller("SystemConfigurationHostEditCtrl", ["$location", "$rootScope", "$scope", "SystemConfigurationHostFactory",
	function($location, $rootScope, $scope, SystemConfigurationHostFactory) {
		dragDropHelper($scope);

		$scope.editHost = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/hosts/" + $rootScope.id + "/edit/");
		};

		$scope.updateHost = function() {
			var params = {};

			for (var k in $scope.use) {
				var key = $scope.use[k].name;
				var value = $scope.hostData[key];
				params[key] = value;
			}

			SystemConfigurationHostFactory.update($rootScope.id, params)
				.success(function(data) {
					$location.path(stigma2.getConfiguration().home + "/configuration/hosts/" + $rootScope.id + "/");
				})
				.error(function(data) {
					console.log(data);
				});
		};

		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/hosts/");
		};

		SystemConfigurationHostFactory.show($rootScope.id)
			.then(function(data) {
				$scope.hostData = data.hostData;
				$scope.hostDetail = data.hostDetail;
				$scope.use = data.use;
				$scope.disuse = data.disuse;
			});
	}]);

mainApp.controller("SystemConfigurationServiceListCtrl", ["$location", "$rootScope", "$scope", "SystemConfigurationServiceFactory",
	function($location, $rootScope, $scope, SystemConfigurationServiceFactory) {
		$scope.createService = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/services/create/");
		};

		$scope.detailService = function(id) {
			$rootScope.id = id;
			$location.path(stigma2.getConfiguration().home + "/configuration/services/" + id + "/");
		};

		$scope.listHost = function(host_object_uuid) {
			$rootScope.params = {
				"object_uuid": host_object_uuid
			};
			$location.path(stigma2.getConfiguration().home + "/configuration/hosts/");
		};

		SystemConfigurationServiceFactory.list($rootScope.params)
			.then(function(data) {
				$scope.services = data;
			});
	}]);

mainApp.controller("SystemConfigurationServiceCreationCtrl", ["$location", "$scope", "SystemConfigurationServiceFactory",
	function($location, $scope, SystemConfigurationServiceFactory) {
		dragDropHelper($scope);
		$scope.serviceData = {};

		$scope.saveService = function() {
			var params = {};

			for (var i in $scope.serviceData) {
				var key = $scope.use[i].name;
				var value = $scope.serviceData[i];
				params[key] = value;
			}

			SystemConfigurationServiceFactory.save(params)
				.success(function(data) {
					$location.path(stigma2.getConfiguration().home + "/configuration/services/");
				})
				.error(function(data) {
					console.log(data);
				});
		};

		$scope.cancel = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/services/");
		};

		SystemConfigurationServiceFactory.create()
			.then(function(data) {
				$scope.use = data.use;
				$scope.disuse = data.disuse;
			});
	}]);

mainApp.controller("SystemConfigurationTimeperiodListCtrl", ["$location", "$rootScope", "$scope", "SystemConfigurationTimeperiodFactory",
	function($location, $rootScope, $scope, SystemConfigurationTimeperiodFactory) {
		$scope.createTimeperiod = function() {
			$location.path(stigma2.getConfiguration().home + "/configuration/timeperiods/create/");
		};

		$scope.editTimeperiod = function(id) {
			$rootScope.id = id;
			$location.path(stigma2.getConfiguration().home + "/configuration/timeperiods/"+ id + "/edit/");
		};

		$scope.deleteTimeperiod = function(id) {
			SystemConfigurationTimeperiodFactory.remove(id)
				.success(function(data) {
					SystemConfigurationTimeperiodFactory.list()
						.then(function(timeperiods) {
							$scope.timeperiods = timeperiods;
						});
				});
		};

		SystemConfigurationTimeperiodFactory.list()
			.then(function(data) {
				$scope.timeperiods = data;
			});
	}]);

mainApp.controller("SystemConfigurationTimeperiodCreationCtrl", ["$compile", "$location", "$scope", "DirectiveTimeperiodFactory", "SystemConfigurationTimeperiodFactory",
	function($compile, $location, $scope, DirectiveTimeperiodFactory, SystemConfigurationTimeperiodFactory) {
		$scope.count = 0;
		$scope.timeperiodData = {};

		$scope.addRow = function() {
			$scope.count++;
			var content = $compile('<x-timeperiod-add-row count="' + $scope.count + '"></x-timeperiod-add-row>')($scope);
			$('tbody').append(content);
		};

		$scope.saveTimeperiod = function() {
			var timeperiods = DirectiveTimeperiodFactory.getTimeperiods();
			var params = jQuery.extend({}, timeperiods, $scope.timeperiodData);

			SystemConfigurationTimeperiodFactory.save(params)
				.success(function(data) {
					$location.path(stigma2.getConfiguration().home + "/configuration/timeperiods/");
				})
				.error(function(data) {
					console.log(data);
				});
		};
	}]);

var dragDropHelper = function($scope) {
	$scope.onDragSuccess1 = function(data, evt) {
		if (data.required == "Y") return;
		var index = $scope.use.indexOf(data);
		if (index > -1) $scope.use.splice(index, 1);
	};

	$scope.onDropComplete1 = function(data, evt) {
		var index = $scope.use.indexOf(data);
		if (index == -1) $scope.use.push(data);
	};

	$scope.onDragSuccess2 = function(data, evt) {
		var index = $scope.disuse.indexOf(data);
		if (index > -1) $scope.disuse.splice(index, 1);
	};

	$scope.onDropComplete2 = function(data, evt) {
		if (data.required == "Y") return;
		var index = $scope.disuse.indexOf(data);
		if (index == -1) $scope.disuse.push(data);
	};
};
