<!DOCTYPE html>
<html>
<head>
	<link href="css/bootstrap-3.2.0-dist/bootstrap.min.css" rel="stylesheet">
	<link href="css/font-awesome-4.2.0/font-awesome.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">

	<script src="js/jquery-2.1.1/jquery.min.js" type="text/javascript"></script>
	<script src="js/angularjs-1.2.26/angular.min.js" type="text/javascript"></script>
	<script src="js/angularjs-1.2.26/angular-route.min.js" type="text/javascript"></script>
	<script src="js/bootstrap-3.2.0-dist/bootstrap.min.js" type="text/javascript"></script>
	<script src="js/ngDraggable-master/ngDraggable.js" type="text/javascript"></script>
	<script src="js/configuration.js" type="text/javascript"></script>
	<script src="js/app.js" type="text/javascript"></script>
	<script src="js/controllers.js" type="text/javascript"></script>
	<script src="js/services.js" type="text/javascript"></script>
	
	<title>Stigma2</title>
</head>
<body ng-app="mainApp">
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