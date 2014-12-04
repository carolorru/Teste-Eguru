define(['jQuery'],
	function($){
		
		var numGame = 0,
			numRight = 0,
			avaregeAnswer = 0,
			report = {};

		report.numGame = function(){
			numGame += 1;
		};

		report.numRight = function(){
			numRight += 1;
		};
		
		report.avaregeAnswer = function(){
			
			avaregeAnswer = (numRight / numGame) * 100;
			avaregeAnswer = parseFloat(Math.round(avaregeAnswer * 100) / 100).toFixed(2);
			var reportBox = $('#results-page');

			reportBox.find('.right-answers').html(numRight + '/' + numGame);
			reportBox.find('.precision').html(avaregeAnswer + '%');
		};

		report.avaregeTime = function(e){
			var sum = 0;
			for (var i = 0; i < e.length; i++) {
				sum += e[i];
			};
			sum = parseFloat(Math.round((sum / e.length) * 100) / 100).toFixed(2);

			var reportBox = $('#results-page');
			reportBox.find('.time-reaction').html(sum + ' s');
		}

		return report;

	});