<div ng-controller="SystemConfigurationCommandCreationCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Create Command</h2>
		</div>

		<form ng-submit="saveCommand()">
			<div class="form-group">
				<label class="control-label" for="command_name">Command Name</label>
				<input type="text" class="form-control input-sm" ng-model="commandData.command_name" placeholder="Command Name" />
			</div>
			<div class="form-group">
				<label class="control-label" for="command_line">Command Line</label>
				<textarea class="form-control" ng-model="commandData.command_line" rows="10" placeholder="Command Line"></textarea>
			</div>
			<div class="form-group text-right">	
				<button type="button" class="btn btn-lg" ng-click="cancel()">Cancel</button>
				<button type="submit" class="btn btn-primary btn-lg">Submit</button>
			</div>
		</form>
	</div>
</div>