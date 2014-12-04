define(['jQuery', 'modals/report', 'modals/timer'],
	function($, report, timer){
		
		// sistem
		var numOnBox1,
			numOnBox2,
			numValue = [ 1 , 5 , 10 , 25],
			colorValue = ['block-grey', 'block-blue', 'block-orange', 'block-yellow'],
			box1 = [],
			box2 = [],
			game = {};

		// aux
		var blocks = [],
			sumBox1 = 0,
			sumBox2 = 0;


		//don't repeat sequence of blocks
		game.fakeRandom = function(){
			var numMaxBlocks = 11;

			if (blocks.length == numMaxBlocks) {
				blocks = [];
			}
			
			var index = Math.floor(Math.random() * numMaxBlocks); 
			while (blocks.indexOf(index) >= 0) {  
				index = Math.floor(Math.random() * numMaxBlocks);
			}
			
			blocks.push(index); 
			return index; 
		};

		//assigning values ​​to the game
		game.createBlocks = function(){
			
			var parentBox = $('#game-page'),
				styleBox1 = $('#game-page').find('.box-1').find('.block'),
				styleBox2 = $('#game-page').find('.box-2').find('.block'); 
			
			for (var i = 0; i < box1.length; i++) {
				styleBox1.eq(box1[i][0]).addClass(colorValue[box1[i][1]]);
				styleBox1.eq(box1[i][0]).find('.num').text(numValue[box1[i][2]]);
				sumBox1 += numValue[box1[i][2]];
				parentBox.find('.box-1').attr('attr-sum', sumBox1);
			};
			for (var i = 0; i < box2.length; i++) {
				styleBox2.eq(box2[i][0]).addClass(colorValue[box2[i][1]]);
				styleBox2.eq(box2[i][0]).find('.num').text(numValue[box2[i][2]]);
				sumBox2 += numValue[box2[i][2]];
				parentBox.find('.box-2').attr('attr-sum', sumBox2);
			};
		};


		game.setup = function(){

			timer.count();

			blocks = [];
			// Number of new values
			numOnBox1 = Math.ceil(Math.random() * 12);
			numOnBox2 = Math.ceil(Math.random() * 12);

			// Choosing random values, random styles and random blocks
			var blockNunber,
				blockStyle,
				blockValue;
			
			for (var i = 0; i < numOnBox1; i++) {
				blockNunber = game.fakeRandom();
				blockStyle = Math.floor(Math.random() * 4);
				blockValue = Math.floor(Math.random() * 4);
				box1.push([blockNunber, blockStyle, blockValue]);
			};
			blocks = [];
			for (var i = 0; i < numOnBox2; i++) {
				blockNunber = game.fakeRandom();
				blockStyle = Math.floor(Math.random() * 4);
				blockValue = Math.floor(Math.random() * 4);
				box2.push([blockNunber, blockStyle, blockValue]);
			};
			
			game.createBlocks();
			report.numGame();

		};

		//refresh boxes
		game.refresh = function(){
			var allBlocks = $('#game-page').find('.block'),
				allText = allBlocks.find('.num');

			//reset data
			allBlocks.removeClass('block-grey block-blue block-orange block-yellow');
			allText.text('');
			//sistem
			numOnBox1 = 0;
			numOnBox2 = 0;
			box1 = [];
			box2 = [];
			//aux
			blocks = [];
			sumBox1 = 0;
			sumBox2 = 0;

			//restart
			game.setup();

		};

		game.result = function(e){

			timer.timeResponse();

			if(parseFloat(e.attr('attr-sum')) >= parseFloat($('#game-page').find('.box-1').attr('attr-sum'))
				&& parseFloat(e.attr('attr-sum')) >= parseFloat($('#game-page').find('.box-2').attr('attr-sum'))){

				$('#game-page').find('.result').removeClass('right wrong').addClass('right').fadeIn();
				//restart
				game.refresh();
				report.numRight();

			}else{

				$('#game-page').find('.result').removeClass('right wrong').addClass('wrong').fadeIn();
				//restart
				game.refresh();
			}
		};

		return game;

	});