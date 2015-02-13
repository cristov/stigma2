<div ng-controller="SystemConfigurationListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Configuration List</h2>
		</div>

		<div>
			<h4>Select Type of Config Data You Wish To View</h4>
			<p><select ng-options="object.text for object in objects track by object.text" ng-model="type"></select>
			<p><button type="button" class="btn btn-default btn-sm" ng-click="continueToNextStep()">Continue</button>
		</div>
	</div>
</div>