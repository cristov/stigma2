<div ng-controller="SystemConfigurationHostCreationCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Create Host</h2>
		</div>

		<form ng-submit="saveHost()">
			<div class="form-group">
				<div class="row topRow">
					<h4 class="heading">
						Select Configuration
					</h4>
			 	</div>
		        
				<div class="row">
					<div ng-drop="true" ng-drop-success="onDropComplete1($data,$event)">
						<span class="title">사용</span>

						<div ng-repeat="obj in use" ng-drag="true" ng-drag-data="obj" ng-drag-success="onDragSuccess1($data,$event)">
							{{obj.name}}
						</div>

					</div>

					<div ng-drop="true" ng-drop-success="onDropComplete2($data,$event)">
						<span class="title">사용안함</span>

						<div ng-repeat="obj in disuse" ng-drag="true" ng-drag-data="obj" ng-drag-success="onDragSuccess2($data,$event)">
							{{obj.name}}
						</div>

					</div> 
				</div>
			</div>
			<div class="form-group">
				<div class="row">
					<h4 class="heading">
						Write Configuration
					</h4>
				</div>

				<table>
					<thead>
						<tr>
							<th class="hostCreationTitleName">Configuration Name</th>
							<th class="hostCreationTitleValue">Configuration Value</th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="rowContents in use">
							<td>
								<input type="text" class="form-control input-sm" ng-model="rowContents.name" ng-readonly="true" />
							</td>
							<td>
								<input type="text" class="form-control input-sm" ng-model="hostData['' + $index]" placeholder="{{ rowContents.placeholder }}" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="form-group text-right">	
				<button type="button" class="btn btn-lg" ng-click="cancel()">Cancel</button>
				<button type="submit" class="btn btn-primary btn-lg">Submit</button>
			</div>
		</form>
	</div>
</div>