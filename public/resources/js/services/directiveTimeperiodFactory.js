define(['./module'],
	function(services) {
		'use strict';

		services.factory('DirectiveTimeperiodFactory', function() {
			var timeperiods = [];

			return {
				getTimeperiods: function() {
					return timeperiods;
				},
				register: function(timeperiod) {
					timeperiods.push(timeperiod);
				}
			};
		});
	}
);