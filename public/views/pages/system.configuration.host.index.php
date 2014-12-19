<div ng-controller="SystemConfigurationHostListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Hosts List</h2>
		</div>

		<div>
			<div class="form-group text-right">
				<i class="fa fa-search"></i> <input type="text" ng-model="search" placeholder="Search">
			</div>
			<div>
				<!-- <div class="col-lg-9" data-toggle="buttons">
					<label class="btn btn-default" ng-click="" ng-repeat="group in groups" style="float: left; margin: 5px 5px;">
						{{ group.hostgroup_name }}
					</label>
				</div> -->
				<pre>{{radioModel || 'null'}}</pre>
				<div class="col-lg-9" data-toggle="buttons">
					<label class="btn btn-success" ng-model="radioModel" btn-radio="'Left'" uncheckable>Left</label>
					<label class="btn btn-success" ng-model="radioModel" btn-radio="'Middle'" uncheckable>Middle</label>
					<label class="btn btn-success" ng-model="radioModel" btn-radio="'Right'" uncheckable>Right</label>
					<label class="btn btn-default" ng-click="toggle($event)" ng-repeat="group in groups">
						{{ group.hostgroup_name }}
					</label>
				</div>
				<div class="col-lg-3">
					<!-- <a class="btn btn-small btn-primary">Add Group</a> -->
					<a class="btn btn-small btn-primary">Update Group</a>
					<a class="btn btn-small btn-danger">Drop Group</a>
				</div>
			</div>
			
			<table class="table table-striped table-condensed">
				<thead>
					<tr>
						<th style="width:20px;"> </th>
						<th style="min-width: 80px;">Host</th>
						<th style="width:20px;"> </th>
						<th style="width:20px;"> </th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="host in hosts | filter:search" ng-show="hosts.length">
						<td><input type="checkbox"></td>
						<td><a ng-click="listService(host.object_uuid)">{{ host.host_name }}</a></td>
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