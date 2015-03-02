<div class="col-md-11 col-md-offset-1">
	<div class="page-header">
		<h2>Detail Service</h2>
	</div>

	<div class="form-group">
		<div>
			<span class="label-default col-lg-3 help-block">Configuration Name</span>
			<span class="label-default col-lg-9 help-block">Configuration Value</span>
		</div>
		<div ng-repeat="prop in serviceDetail">
			<label for="" class="col-lg-3 control-label">{{ prop.key }}</label>
			<div class="col-lg-9">
				<span class="help-block">{{ prop.value }}</span>
			</div>
		</div>
	</div>
	<div class="form-group text-right">	
		<button type="button" class="btn btn-default btn-lg" ng-click="list()">List</button>
		<button type="button" class="btn btn-primary btn-lg" ng-click="editService()">Modify</button>
	</div>
</div>