<div class="col-md-11 col-md-offset-1">
	<div class="page-header">
		<h2>Services List</h2>
	</div>

	<div>
		<p><a ng-click="createService()" class="btn btn-small">create new service</a></p>
		<table class="table table-striped table-condensed">
			<thead>
				<tr>
					<th style="width: 180px;">Host</th>
					<th style="width: 180px;">Service</th>
					<th>Description</th>
					<th style="width: 55px;"> </th>
					<th style="width: 75px;"> </th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="service in services" ng-show="services.length">
					<td class="listTdOverflow" style="vertical-align: middle;"><a ng-click="listHost(service.host_object_uuid)">{{ service.host_name }}</a></td>
					<td class="listTdOverflow" style="vertical-align: middle;">{{ service.service_name }}</td>
					<td class="listTdOverflow" style="vertical-align: middle;">{{ service.description }}</td>
					<td><a ng-click="editService(service.id)" class="btn btn-small btn-primary">edit</a></td>
					<td><a ng-click="deleteService(service.id)" class="btn btn-small btn-danger">delete</a></td>
				</tr>
				<tr ng-show="!services.length">
					<td colspan="4"><strong>No services.</strong></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>