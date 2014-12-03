<div ng-controller="SystemConfigurationHostListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Hosts List</h2>
		</div>

		<div>
			<table class="table table-striped table-condensed">
				<thead>
					<tr>
						<th style="min-width: 80px;">Host</th>
						<th style="width:20px;"> </th>
						<th style="width:20px;"> </th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="host in hosts" ng-show="hosts.length">
						<td><a ng-click="listService(host.object_uuid)" class="btn btn-small">{{ host.host_name }}</a></td>
						<td><a ng-click="detailHost(host.id)" class="btn btn-small btn-primary">detail</a></td>
						<td><a ng-click="deleteHost(host.id)" class="btn btn-small btn-danger">delete</a></td>
					</tr>
					<tr ng-show="!hosts.length">
						<td colspan="3"><strong>No hosts.</strong></td>
					</tr>
				</tbody>
			</table>
			<a ng-click="createHost()" class="btn btn-small">create new host</a>
		</div>
	</div>
</div>