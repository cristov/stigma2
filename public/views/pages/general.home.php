<div ng-controller="HomeCtrl">
	<div ng-if="$info" class="info">
		<span>{{ $info }}</span>
	</div>
	<div ng-if="$success" class="success">
		<span>{{ $success }}</span>
	</div>
	<div ng-if="$warning" class="warning">
		<span>{{ $warning }}</span>
	</div>
	<div ng-if="$error" class="error">
		<span>{{ $error }}</span>
	</div>
	<div class="jumbotron text-center">
		<h1>Home Page</h1>

		<p>{{ message }}</p>
	</div>
</div>