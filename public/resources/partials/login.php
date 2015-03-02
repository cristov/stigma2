<div class="loginArea">
	<form ng-submit="login()">
		<h1>Login</h1>
		<div ng-if="messages" class="error">
			<div ng-repeat="(element, groups) in messages">
				<ul ng-repeat="(num, message) in groups">
					<li>{{ message }}</li>
				</ul>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label" for="username">Username</label>
			<input type="text" class="form-control input-sm" ng-model="loginData.username" />
		</div>
		<div class="form-group">
			<label class="control-label" for="password">Password</label>
			<input type="password" class="form-control input-sm" ng-model="loginData.password" />
		</div>
		<div class="form-group text-right">	
			<button type="submit" class="btn btn-primary btn-lg">Login</button>
		</div>
	</form>
</div>