define(['jQuery', 'modals/changePage', 'modals/report'],
	function($, page, report){
		
		var seconds = 60,
			timeAnswer = 0,
			interval,
			timeAnswers = [],
			timer = {};

		timer.Countdown = function(){
			
			if((seconds - 1) >= 0){
				var min = parseInt(seconds/60);
				var sec = seconds%60;

				if(min < 10){
					min = "0"+min;
					min = min.substr(0, 2);
				}
				if(sec <=9){
					sec = "0"+sec;
				}

				printTime = min + ':' + sec;
				$("#timerStart").html(printTime);

				setTimeout(timer.Countdown,1000);
				seconds--;

			} else {
				$('.footer').hide();
				page.nextPage();
				report.avaregeAnswer();
				report.avaregeTime(timeAnswers);
				clearTimeout(interval);
			}
		};

		timer.count = function(){
			timeAnswer += 1;
			interval = setTimeout(timer.count,100);
		};

		timer.timeResponse = function(){
			timeAnswer = timeAnswer/10;
			timeAnswers.push(timeAnswer);
			clearTimeout(interval);
			timeAnswer = 0;
		};

		return timer;

	});


 
