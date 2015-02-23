<div ng-controller="SystemConfigurationCommandListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Commands List</h2>
		</div>

		<div>
			<table class="table table-striped table-condensed" style="table-layout: fixed;">
				<thead>
					<tr>
						<th style="width: 180px;">Command Name</th>
						<th>Command Line</th>
						<th style="width: 55px;"> </th>
						<th style="width: 75px;"> </th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="command in commands" ng-show="commands.length">
						<td>{{ command.command_name }}</td>
						<td style="overflow: hidden; white-space: nowrap;">{{ command.command_line }}</td>
						<td><a ng-click="editCommand(command.id)" class="btn btn-small btn-primary">edit</a></td>
						<td><a ng-click="deleteCommand(command.id)" class="btn btn-small btn-danger">delete</a></td>
					</tr>
					<tr ng-show="!commands.length">
						<td colspan="4"><strong>No commands.</strong></td>
					</tr>
				</tbody>
			</table>
			<a ng-click="createCommand()" class="btn btn-small">create new command</a>
		</div>
	</div>
</div>