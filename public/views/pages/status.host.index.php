<div ng-controller="StatusHostListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Hosts List</h2>
		</div>

		<div>
			<table class="table table-striped table-condensed">
				<thead>
					<tr>
						<th style="min-width: 80px;">Host</th>
						<th style="min-width: 80px;">Status</th>
						<th style="min-width: 80px;">Last Check</th>
						<th style="min-width: 80px;">Duration</th>
						<th style="min-width: 80px;">Status Information</th>
					</tr>
			    </thead>
				<tbody>
					<tr ng-repeat="host in hosts" ng-show="hosts.length">
						<td><a ng-click="detailHost(host.id)" class="btn btn-small">{{ host.host_name }}</a></td>
						<td>{{ host.status }}</td>
						<td>{{ host.last_check }}</td>
						<td>{{ host.duration }}</td>
						<td>{{ host.info }}</td>
					</tr>
					<tr ng-show="!hosts.length">
						<td colspan="5"><strong>No hosts.</strong></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>