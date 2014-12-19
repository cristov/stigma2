<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	
	<link href="/stigma2/css/bootstrap-3.2.0-dist/bootstrap.min.css" rel="stylesheet">
	<link href="/stigma2/css/style.css" rel="stylesheet">

	<script src="/stigma2/js/jquery-2.1.1/jquery.min.js"></script>
	<script src="/stigma2/js/angularjs-1.2.26/angular.min.js"></script>
	<script src="/stigma2/js/angularjs-1.2.26/angular-route.min.js"></script>
	<script src="/stigma2/js/bootstrap-3.2.0-dist/bootstrap.min.js"></script>
	<script src="/stigma2/js/configuration.js"></script>
	<script src="/stigma2/js/app.js"></script>
	<script src="/stigma2/js/controllers.js"></script>
	<script src="/stigma2/js/services.js"></script>
	
	<title>Stigma2</title>
</head>
<body ng-app="loginApp">
	<header>
		<nav class="navbar navbar-default">
			<div class="container">
				<div class="navbar-header">
					<span class="navbar-brand">Stigma2</span>
				</div>
			</div>
		</nav>
	</header>
	<div class="mainContents">
		<div ng-view></div>
	</div>
	<footer class="text-center footerbar">
		Copyright 2010 All Rights Reserved. <a href="http://www.zespro.co.kr">Zespro</a>
	</footer>
</body>
</html>