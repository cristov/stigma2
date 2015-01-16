<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	
	<link href="/stigma2/css/bootstrap-3.2.0-dist/bootstrap.min.css" rel="stylesheet">
	<link href="/stigma2/css/font-awesome-4.2.0/font-awesome.min.css" rel="stylesheet">
	<link href="/stigma2/css/style.css" rel="stylesheet">

	<script src="/stigma2/js/jquery-2.1.1/jquery.min.js"></script>
	<script src="/stigma2/js/angularjs-1.2.26/angular.min.js"></script>
	<script src="/stigma2/js/angularjs-1.2.26/angular-ui-router.min.js"></script>
	<script src="/stigma2/js/angularjs-1.2.26/angular-route.min.js"></script>
	<script src="/stigma2/js/bootstrap-3.2.0-dist/bootstrap.min.js"></script>
	<script src="/stigma2/js/ngDraggable-master/ngDraggable.js"></script>
	<script src="/stigma2/js/configuration.js"></script>
	<script src="/stigma2/js/app.js"></script>
	<script src="/stigma2/js/controllers.js"></script>
	<script src="/stigma2/js/services.js"></script>
	
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
					<li><a ng-click="logout()"><i class="fa fa-lock"></i> Logout</a></li>
				</ul>
			</div>
		</nav>
	</header>
	<aside class="sidebar">
		<div class="sidebarContents">
			<ul class="nav">
				<li class="sidebarContentTitle">Dashboard</li>
				<li class="sidebarContentElement"><a ng-click="overview()">Overview</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Host</li>
				<li class="sidebarContentElement"><a ng-click="hosts()">All</a></li>
				<li class="sidebarContentElement"><a ng-click="hosts('0')">Up</a></li>
				<li class="sidebarContentElement"><a ng-click="hosts('1')">Down</a></li>
				<li class="sidebarContentElement"><a ng-click="hosts('2')">Unreachable</a></li>
				<li class="sidebarContentElement"><a>Pending</a></li>
				<li class="sidebarContentElement"><a ng-click="hostsGraph()"><i class="fa fa-line-chart"></i> Graph</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Service</li>
				<li class="sidebarContentElement"><a ng-click="services()">All</a></li>
				<li class="sidebarContentElement"><a ng-click="services('0')">OK</a></li>
				<li class="sidebarContentElement"><a ng-click="services('1')">Warning</a></li>
				<li class="sidebarContentElement"><a ng-click="services('2')">Critical</a></li>
				<li class="sidebarContentElement"><a ng-click="services('3')">Unknown</a></li>
				<li class="sidebarContentElement"><a>Pending</a></li>
				<li class="sidebarContentElement"><a ng-click="servicesGraph()"><i class="fa fa-line-chart"></i> Graph</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Report</li>
				<li class="sidebarContentElement"><a ng-click="log()">Log</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">System</li>
				<li class="sidebarContentElement"><a ng-click="configuration()">Configuration</a></li>
			</ul>
		</div>
	</aside>
	<div class="mainContents">
		<p><i>Best viewed in pop-out mode to see location changes. Click blue button on the right.</i></p>

		  <div class="navbar">
		    <div class="navbar-inner">
		      <a class="brand" href="#">Quick Start</a>
		      <ul class="nav">
		        <li><a ui-sref="state1">state 1</a></li>
		        <li><a ui-sref="state2">state 2</a></li>
		      </ul>
		    </div>
		  </div>

		  <div class="row">
		    <div class="span12">
		      <div class="well" ui-view></div>        
		    </div>
		  </div>
	</div>
	<footer class="text-center footerbar">
		Copyright 2010 All Rights Reserved. <a href="http://www.zespro.co.kr">Zespro</a>
	</footer>
</body>
</html>