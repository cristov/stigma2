<div ng-controller="SystemConfigurationTimeperiodEditCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Edit Timeperiod</h2>
		</div>

		<form ng-submit="updateTimeperiod(timeperiodData.id)">
			<div class="form-group">
				<div class="text-right">
					<button type="button" class="btn btn-info btn-sm" ng-click="addRow()">Add Row</button>
				</div>
				<p>
				
				<table>
					<thead>
						<tr>
							<th class="tableTitleName">Configuration Name</th>
							<th class="tableTitleValue" colspan="2">Configuration Value</th>
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


						<tr>
							<td>
								<select ng-options="object.text for object in foo1 track by object.text" ng-model="timeperiodData.foo1"></select>
								<select ng-options="object.text for object in foo2 track by object.text" ng-model="timeperiodData.foo2"></select>
								<select ng-options="object.text for object in foo3 track by object.text" ng-model="timeperiodData.foo3" ng-show="isWeek"></select>
							</td>
							<td>
								<select ng-options="object.text for object in bar1 track by object.text" ng-model="timeperiodData.bar1"></select> :
								<select ng-options="object.text for object in bar2 track by object.text" ng-model="timeperiodData.bar2"></select> ~
								<select ng-options="object.text for object in bar3 track by object.text" ng-model="timeperiodData.bar3"></select> :
								<select ng-options="object.text for object in bar4 track by object.text" ng-model="timeperiodData.bar4"></select>
							</td>
							<td class="text-right timeperiodRow">
								<a ng-click="deleteRow(count)" class="btn btn-xs btn-danger">delete</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="form-group text-right">
				<button type="button" class="btn btn-default btn-lg" ng-click="cancel()">Cancel</button>
				<button type="submit" class="btn btn-primary btn-lg">Submit</button>
			</div>
		</form>
	</div>
</div>