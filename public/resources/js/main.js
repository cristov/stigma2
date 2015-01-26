require.config({
	baseUrl: 'resources/js',
	paths: {
		'ui.router': '../lib/angular/angular-ui-router.min',
		'ngDraggable': '../lib/angular/ngDraggable',
		'jquery': '../lib/jquery/jquery-1.11.2.min',
		'domReady': '../lib/require/domReady',
		'angular': '../lib/angular/angular.min'
	},
	shim: {
		'angular': {
			deps: ['jquery'],
			exports: 'angular'
		},
		'ngDraggable': {
			deps: ['angular']
		},
		'ui.router': {
			deps: ['angular']
		}
	}
});

define(['require', 'angular', 'app', 'routes'],
	function(require, angular) {
		'use strict';

		require(['domReady!'], function(document) {
			angular.bootstrap(document, ['app']);
		});
	}
);