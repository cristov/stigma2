<div ng-controller="SystemConfigurationServiceListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Services List</h2>
		</div>

		<div>
			<table class="table table-striped table-condensed">
				<thead>
					<tr>
						<th style="min-width: 80px;">Host</th>
						<th style="min-width: 80px;">Description</th>
						<th style="width:20px;"> </th>
						<th style="width:20px;"> </th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="service in services" ng-show="services.length">
						<td><a ng-click="listHost(service.host_object_uuid)">{{ service.host_name }}</a></td>
						<td>{{ service.service_description }}</td>
						<td><a ng-click="detailService(service.id)" class="btn btn-small btn-primary">detail</a></td>
						<td><a ng-click="deleteService(service.id)" class="btn btn-small btn-danger">delete</a></td>
					</tr>
					<tr ng-show="!services.length">
						<td colspan="4"><strong>No services.</strong></td>
					</tr>
				</tbody>
			</table>
			<a ng-click="createService()" class="btn btn-small">create new service</a>
		</div>
	</div>
</div>