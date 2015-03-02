<tr>
	<td>
		<select ng-options="object.text for object in foo1 track by object.value" ng-model="timeperiodData.foo1"></select>
		<select ng-options="object.text for object in foo2 track by object.value" ng-model="timeperiodData.foo2"></select>
		<select ng-options="object.text for object in foo3 track by object.value" ng-model="timeperiodData.foo3"></select>
	</td>
	<td>
		<select ng-options="object.text for object in bar1 track by object.value" ng-model="timeperiodData.bar1"></select> :
		<select ng-options="object.text for object in bar2 track by object.value" ng-model="timeperiodData.bar2"></select> ~
		<select ng-options="object.text for object in bar3 track by object.value" ng-model="timeperiodData.bar3"></select> :
		<select ng-options="object.text for object in bar4 track by object.value" ng-model="timeperiodData.bar4"></select>
	</td>
	<td class="text-right timeperiodRow">
		<a ng-click="deleteRow(count)" class="btn btn-xs btn-danger">delete</a>
	</td>
</tr>