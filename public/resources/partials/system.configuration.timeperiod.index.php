<div ng-controller="SystemConfigurationTimeperiodListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Timeperiods List</h2>
		</div>

		<div>
			<p><a ng-click="createTimeperiod()" class="btn btn-small">create new timeperiod</a></p>
			<table class="table table-striped table-condensed">
				<thead>
					<tr>
						<th>Timeperiod Name</th>
						<th style="width: 55px;"> </th>
						<th style="width: 75px;"> </th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="timeperiod in timeperiods" ng-show="timeperiods.length">
						<td class="listTdOverflow" style="vertical-align: middle;">{{ timeperiod.timeperiod_name }}</td>
						<td><a ng-click="editTimeperiod(timeperiod.id)" class="btn btn-small btn-primary">edit</a></td>
						<td><a ng-click="deleteTimeperiod(timeperiod.id)" class="btn btn-small btn-danger">delete</a></td>
					</tr>
					<tr ng-show="!timeperiods.length">
						<td colspan="3"><strong>No timeperiods.</strong></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>