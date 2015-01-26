<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Stigma2</title>

	<link rel="stylesheet" type="text/css" href="resources/css/bootstrap-3.3.2-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/font-awesome-4.2.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/style.css">

	<script data-main="resources/js/main" src="resources/lib/require/require.js"></script>
</head>
<body>
	<header>
		<nav class="navbar navbar-default">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" ui-sref="home">Stigma2</a>
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
				<li class="sidebarContentElement"><a ui-sref="dashboardOverviewList">Overview</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Host</li>
				<li class="sidebarContentElement"><a ui-sref="hostList({type:''})">All</a></li>
				<li class="sidebarContentElement"><a ui-sref="hostList({type:'0'})">Up</a></li>
				<li class="sidebarContentElement"><a ui-sref="hostList({type:'1'})">Down</a></li>
				<li class="sidebarContentElement"><a ui-sref="hostList({type:'2'})">Unreachable</a></li>
				<li class="sidebarContentElement"><a>Pending</a></li>
				<li class="sidebarContentElement"><a ng-click="hostsGraph()"><i class="fa fa-line-chart"></i> Graph</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Service</li>
				<li class="sidebarContentElement"><a ui-sref="serviceList({type:''})">All</a></li>
				<li class="sidebarContentElement"><a ui-sref="serviceList({type:'0'})">OK</a></li>
				<li class="sidebarContentElement"><a ui-sref="serviceList({type:'1'})">Warning</a></li>
				<li class="sidebarContentElement"><a ui-sref="serviceList({type:'2'})">Critical</a></li>
				<li class="sidebarContentElement"><a ui-sref="serviceList({type:'3'})">Unknown</a></li>
				<li class="sidebarContentElement"><a>Pending</a></li>
				<li class="sidebarContentElement"><a ng-click="servicesGraph()"><i class="fa fa-line-chart"></i> Graph</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">Report</li>
				<li class="sidebarContentElement"><a ui-sref="reportLogList">Log</a></li>
			</ul>
			<p>
			<ul class="nav">
				<li class="sidebarContentTitle">System</li>
				<li class="sidebarContentElement"><a ui-sref="systemConfigurationList">Configuration</a></li>
			</ul>
		</div>
	</aside>
	<article class="mainContents">
		<div ui-view></div>
	</article>
	<footer class="text-center footerbar">
		Copyright 2010 All Rights Reserved. <a href="http://www.zespro.co.kr">Zespro</a>
	</footer>
</body>
</html>