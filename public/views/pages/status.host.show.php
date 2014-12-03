<div ng-controller="StatusHostShowCtrl">
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
					<tr ng-repeat="(key, value) in host">
						<td>{{ key }}</td>
						<td>{{ value }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="form-group text-right">	
			<button type="button" class="btn btn-lg" ng-click="cancel()">List</button>
		</div>
	</div>
</div>