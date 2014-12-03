<div ng-controller="SystemConfigurationHostEditCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Detail Host</h2>
		</div>

		<div class="form-group">
			<table>
				<thead>
					<tr>
						<th class="hostCreationTitleName">Configuration Name</th>
						<th class="hostCreationTitleValue">Configuration Value</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="rowContents in hostDetail">
						<td>
							<input type="text" class="form-control input-sm" ng-model="rowContents.key" ng-readonly="true" />
						</td>
						<td>
							<input type="text" class="form-control input-sm" ng-model="rowContents.value" ng-readonly="true" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="form-group text-right">	
			<button type="button" class="btn btn-lg" ng-click="cancel()">List</button>
			<button type="button" class="btn btn-primary btn-lg" ng-click="editHost()">Modify</button>
		</div>
	</div>
</div>