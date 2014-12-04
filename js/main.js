window.name = "E-GURU"; 

requirejs.config({ 
	baseUrl: './js', 
	paths: { 
		'jQuery': 'lib/jquery-1.11.1.min',
		'jquery.flot': 'lib/jquery.flot',
        'jquery.flot.pie': 'lib/jquery.flot.pie'
	}, 
	shim: { 
		'jQuery': { 
			exports: 'jQuery' 
			},
        'jquery.flot': {
            deps: ['jQuery'],
            exports: '$.plot'
        },
        'jquery.flot.pie': {
            deps: ['jquery.flot']
        }
	} 
}); 


require(['modals/changePage', 'modals/ramdonGame', 'modals/timer', 'modals/graphResult'],
		function(page, game, timer, graph) { 

			//start a new game
			$('a.start').off().on('click', function(){
				page.nextPage();
				game.setup();
				timer.Countdown();
				$('.footer').show();
			});

			// reset game's values
			$('.action .refresh').off().on('click', function(){
				$('#game-page').find('.result').removeClass('right wrong');
				game.refresh();
			});

			$('.box').off().on('click', function(){
				game.result($(this));
			});

			graph.setup();

		});

