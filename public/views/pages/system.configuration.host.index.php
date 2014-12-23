<div ng-controller="SystemConfigurationHostListCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Hosts List</h2>
		</div>

		<div>
			<div>
				<div class="col-lg-8">
					<div class="form-inline">
						<span>Group Name : </span>
						<input type="text" class="form-control" ng-model="hostgroup_name" />
					</div>
				</div>
				<div class="col-lg-4 text-right">
					<a class="btn btn-small btn-success" ng-show="!hasActive" ng-click="createHostgroup()">Add Group</a>
					<a class="btn btn-small btn-primary" ng-show="hasActive" ng-click="updateHostgroup()">Update Group</a>
					<a class="btn btn-small btn-danger" ng-show="hasActive" ng-click="deleteHostgroup()">Delete Group</a>
				</div>
				<div class="col-lg-12">
					<div style="white-space: nowrap; overflow-x: scroll; padding-bottom: 15px; padding-top: 15px;" data-toggle="buttons">
						<label class="btn btn-default" name="{{ group.object_uuid }}" ng-click="clickHostgroup(group)" ng-repeat="group in groups">
							{{ group.hostgroup_name }}
						</label>
					</div>
				</div>
			</div>
			<div>
				<div class="col-lg-8">
					<div class="form-inline">
						<i class="fa fa-search"></i> <input type="text" class="form-control" ng-model="search.host_name" placeholder="Search">
					</div>
				</div>
				<div class="col-lg-4 text-right">
					<a ng-click="createHost()" class="btn btn-small">create new host</a>
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
		</div>
	</div>
</div>