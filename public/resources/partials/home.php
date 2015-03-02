<div>
	<div ng-if="$success" class="alert alert-success">
		<span>{{ $success }}</span>
	</div>
	<div ng-if="$info" class="alert alert-info">
		<span>{{ $info }}</span>
	</div>
	<div ng-if="$warning" class="alert alert-warning">
		<span>{{ $warning }}</span>
	</div>
	<div ng-if="$error" class="alert alert-danger">
		<span>{{ $error }}</span>
	</div>
	<div class="jumbotron text-center">
		<h1>Home Page</h1>

		<p>{{ message }}</p>
	</div>
</div>