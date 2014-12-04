define(['jQuery', 'jquery.flot', 'jquery.flot.pie'],
	function($){

		var graph = {};

		graph.setup = function (){
			var data = [
		    { label: "Realizado", data: 52, color: '#42B4E6' },
		    { label: "Total", data: 100, color: '#99CCFF' }
		    ];

		    $.plot($("#donut"), data,
		    {
		        series: {
		            pie: {
		                innerRadius: 0.6,
		                show: true,
		                label: { show: false }
		            }
		        },
		        legend: { show: false }
		    });
		    
		    $("#donutData").text(Math.round(data[0].data/data[1].data*100)+"%");
		};

		return graph;

	});