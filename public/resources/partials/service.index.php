<div ng-controller="ServiceListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Services List</h2>
		</div>

		<div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th style="min-width: 80px;">Host</th>
						<th style="min-width: 80px;">Service</th>
						<th style="min-width: 80px;">Status</th>
						<th style="min-width: 80px;">Last Check</th>
						<th style="min-width: 80px;">Duration</th>
						<th style="min-width: 80px;">Attempt</th>
						<th style="min-width: 80px;">Status Information</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="service in services" ng-show="services.length">
						<td><a ng-click="detailHost(service.host_uuid)">{{ service.host_name }}</a></td>
						<td><a ng-click="detailService(service.service_uuid)">{{ service.service_name }}</a></td>
						<td>{{ service.status }}</td>
						<td>{{ service.last_check }}</td>
						<td>{{ service.duration }}</td>
						<td>{{ service.attempt }}</td>
						<td>{{ service.info }}</td>
					</tr>
					<tr ng-show="!services.length">
						<td colspan="7"><strong>No services.</strong></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>