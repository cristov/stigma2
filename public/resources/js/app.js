define(['angular', 'controllers', 'ui.router'],
	function(angular) {
		'use strict';

		var app = angular.module('mainApp', ['controllers', 'ui.router']);

		app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
			function($locationProvider, $stateProvider, $urlRouterProvider) {
				$locationProvider.html5Mode(true);

				$stateProvider
					.state('state1', {
						url: "/stigma2/state1",
						templateUrl: "/stigma2/resources/partials/state1.html"
					})
					.state('state1.list', {
						url: "/list",
						templateUrl: "/stigma2/resources/partials/state1.list.html",
						controller: 'State1Ctrl'
					})
					.state('state2', {
						url: "/stigma2/state2",
						templateUrl: "/stigma2/resources/partials/state2.html"
					})
					.state('state2.list', {
						url: "/list",
						templateUrl: "/stigma2/resources/partials/state2.list.html",
						controller: function($scope) {
							$scope.things = ["A", "Set", "Of", "Things"];
						}
					});

				$urlRouterProvider.otherwise("/stigma2");
			}
		]);

		app.init = function() {
			angular.bootstrap(document, ['mainApp']);
		};

		return app;
	}
);