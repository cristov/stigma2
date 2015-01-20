define(function() {
	'use strict';

	return function($http) {
		return {
			getTimeperiods: function() {
				return timeperiods;
			},
			register: function(timeperiod) {
				timeperiods.push(timeperiod);
			}
		}
	};
});