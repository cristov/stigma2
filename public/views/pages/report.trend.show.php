<div ng-controller="ReportTrendShowCtrl">
	<div class="col-md-11 col-md-offset-1">
		<div class="page-header">
			<h2>Host and Service State Trends</h2>
		</div>

		<div>
			<div id="container" style="height: 400px; min-width: 310px"></div>
		</div>
	</div>
</div>

<script src="../js/Highstock-2.0.3/highstock.js"></script>
<script src="../js/Highstock-2.0.3/modules/exporting.js"></script>
<script type="text/javascript">
var scope = angular.element('[ng-controller="ReportTrendShowCtrl"]').scope();
var _series;
scope.$watch('series', function(value) {
	if (value !== undefined) {
		_series = scope.series;
		highcharts();
	}
});

function highcharts() {
	$(function() {

		Highcharts.setOptions({
			global : {
				useUTC : false
			}
		});
		
		// Create the chart
		$('#container').highcharts('StockChart', {
			chart : {
				events : {
					load : function() {

						// set up the updating of the chart each second
						var series = this.series[0];
						setInterval(function() {
							var x = (new Date()).getTime(), // current time
							y = Math.round(Math.random() * 100);
							series.addPoint([x, y], true, true);
						}, 1000);
					}
				}
			},
			
			rangeSelector: {
				buttons: [{
					count: 1,
					type: 'minute',
					text: '1M'
				}, {
					count: 5,
					type: 'minute',
					text: '5M'
				}, {
					type: 'all',
					text: 'All'
				}],
				inputEnabled: false,
				selected: 0
			},
			
			title : {
				text : 'Live random data'
			},
			
			exporting: {
				enabled: false
			},
			
			series : _series
		});

	});
};
</script>