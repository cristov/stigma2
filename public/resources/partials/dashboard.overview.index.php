<div ng-controller="DashboardOverviewListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Tactical Overview</h2>
		</div>

		<div>
			<table class="table table-striped table-condensed">
				<thead>
					<tr>
						<th colspan="4">Hosts</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="width: 25%;">{{ host.down }} Down</td>
						<td style="width: 25%;">{{ host.unreachable }} Unreachable</td>
						<td style="width: 25%;">{{ host.up }} Up</td>
						<td style="width: 25%;">{{ host.pending }} Pending</td>
					</tr>
				</tbody>
			</table>
			<p>
			<table class="table table-striped table-condensed">
				<thead>
					<tr>
						<th colspan="5">Services</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="width: 20%;">{{ service.critical }} Critical</td>
						<td style="width: 20%;">{{ service.warning }} Warning</td>
						<td style="width: 20%;">{{ service.unknown }} Unknown</td>
						<td style="width: 20%;">{{ service.ok }} Ok</td>
						<td style="width: 20%;">{{ service.pending }} Pending</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>