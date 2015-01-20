require.config({
	baseUrl: 'resources/js',
	paths: {
		'ui.router': '../lib/angular/angular-ui-router.min',
		// 'text': '../lib/require/text',
		'jquery': '../lib/jquery/jquery-1.11.2.min',
		'domReady': '../lib/require/domReady',
		'angular': '../lib/angular/angular.min'
	},
	shim: {
		'angular': {
			deps: ['jquery'],
			exports: 'angular'
		}
		// 'app': {
		// 	deps: ['angular']
		// },
		// 'services': {
		// 	deps: ['angular']
		// },
		// 'controllers': {
		// 	deps: ['angular', 'services']
		// },
		// 'ui.router': {
		// 	deps: ['angular']
		// }
	}
});

define(['require', 'angular', 'app', 'routes'],
	function(require, angular) {
		'use strict';

		require(['domReady!'], function(document) {
			console.log('domReady!');
			angular.bootstrap(document, ['app']);
		});
	}
);

// require(['app', 'domReady'], function(app, domReady) {
// 	domReady(function () {
// 		app.init();
// 	});
// });