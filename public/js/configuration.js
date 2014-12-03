var stigma2 = (function() {
	const CONTEXT_ROOT = "/stigma2";
	const PAGES_ROOT = CONTEXT_ROOT + "/views/pages/";

	var configuration = {
		home: CONTEXT_ROOT,
		route: [
			{"url": CONTEXT_ROOT, "templateUrl": PAGES_ROOT + "general.home.php", "controller": "HomeCtrl"},
			{"url": CONTEXT_ROOT + "/login", "templateUrl": PAGES_ROOT + "login.php", "controller": "LoginCtrl"},
		]
	};

	return {
		getConfiguration: function() {
			return configuration;
		}
	};
}());