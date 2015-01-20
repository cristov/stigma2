<div ng-controller="HostStatusCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Host Current Status</h2>
		</div>

		<div>
			<div ng-if="step == '1'">
				<h4>Step 1: Select Host</h4>
				<p><span>Host : </span>
				<select ng-options="obj.text for obj in hosts track by obj.text" ng-model="statusData.host"></select>
				<p><button type="button" class="btn btn-sm" ng-click="continueStep2()">Continue to Step 2</button>
			</div>
			<div ng-if="step == '2'">
				<h4>Step 2: Select Report Options</h4>
				<p><span>Report period : </span>
				<select ng-options="obj.text for obj in periods track by obj.text" ng-model="statusData.period"></select>
				<p><button type="button" class="btn btn-sm" ng-click="showStatus()">Show Status</button>
			</div>
		</div>
	</div>
</div>