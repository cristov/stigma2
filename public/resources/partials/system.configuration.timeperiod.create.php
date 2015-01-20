<div ng-controller="SystemConfigurationTimeperiodCreationCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Create Timeperiod</h2>
		</div>

		<form ng-submit="saveTimeperiod()">
			<div class="form-group">
				<div class="row">
					<h4 class="heading">
						Write Configuration
					</h4>
				</div>

				<table>
					<thead>
						<tr>
							<th class="hostCreationTitleName">Configuration Name</th>
							<th class="hostCreationTitleValue" colspan="2">Configuration Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span>Timeperiod Name</span>
							</td>
							<td colspan="2">
								<input type="text" class="form-control input-sm" ng-model="timeperiodData.timeperiod_name" />
							</td>
						</tr>
						<tr>
							<td>
								<span>Alias</span>
							</td>
							<td colspan="2">
								<input type="text" class="form-control input-sm" ng-model="timeperiodData.alias" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="form-group text-right">
				<button type="button" class="btn btn-info btn-sm" ng-click="addRow()">Add Row</button>
			</div>
			<div class="form-group text-right">
				<button type="button" class="btn btn-lg" ng-click="cancel()">Cancel</button>
				<button type="submit" class="btn btn-primary btn-lg">Submit</button>
			</div>
		</form>
	</div>
</div>