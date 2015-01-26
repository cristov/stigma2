define([], function() {
	var _scope = null;

	function init() {
		if(this._scope == null) {
			return;
		}
		var $scope = this._scope;

		$scope.onDropComplete1=function(data,evt){
			var index = $scope.use.indexOf(data);
			if (index == -1) {
				$scope.use.push(data);
			}
		}
		$scope.onDragSuccess1=function(data,evt){
			var index = $scope.use.indexOf(data);
			if (index > -1) {
				$scope.use.splice(index, 1);
			}
		}
		$scope.onDragSuccess2=function(data,evt){
			var index = $scope.disuse.indexOf(data);
			if (index > -1) {
				$scope.disuse.splice(index, 1);
			}
		}
		$scope.onDropComplete2=function(data,evt){
			var index = $scope.disuse.indexOf(data);
			if (index == -1) {
				$scope.disuse.push(data);
			}
		}
	}

	function setScope($scope) {
		this._scope = $scope;
	}

	return {
		init: init,
		setScope: setScope
	}
});