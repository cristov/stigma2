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
<body ng-app="mainApp" ng-controller="MainCtrl">
	<header>
		<nav class="navbar navbar-default">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" ng-click="home()">Stigma2</a>
				</div>

				<ul class="nav navbar-nav navbar-right">
					<li><a ng-click="home()"><i class="fa fa-home"></i> Home</a></li>
					<li><a ng-click="logout()"><i class="fa fa-lock"></i> Logout</a></li>
				</ul>
			</div>
		</nav>
	</header>
	<aside class="sidebar">
		<div class="sidebarContents">
			<ul class="nav">
				<li class="sidebarContentTitle">General</li>
				<li class="sidebarContentElement"><a ng-click="home()">Home</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Current Status</li>
				<li class="sidebarContentElement"><a ng-click="overview()">Tactical Overview</a></li>
				<li class="sidebarContentElement"><a ng-click="hosts()">Hosts</a></li>
				<li class="sidebarContentElement"><a ng-click="services()">Services</a></li>
				<li class="sidebarContentElement"><a ng-click="hostgroups()">Host Groups</a></li>
				<li class="sidebarContentElement"><a ng-click="servicegroups()">Service Groups</a></li>
				<li class="sidebarContentElement"><a ng-click="problems()">Problems</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Reports</li>
				<li class="sidebarContentElement"><a ng-click="trends()">Trends</a></li>
				<li class="sidebarContentElement"><a ng-click="alerts()">Alerts</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">System</li>
				<li class="sidebarContentElement"><a ng-click="configuration()">Configuration</a></li>
			</ul>
		</div>
	</aside>
	<div class="mainContents">
		<div ng-view></div>
	</div>
	<footer class="text-center footerbar">
		Copyright 2010 All Rights Reserved. <a href="http://www.zespro.co.kr">Zespro</a>
	</footer>
</body>
</html>