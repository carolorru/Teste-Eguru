define(['jQuery'],
	function($){
		
		var sectionActive,
			page = {};

		page.nextPage = function(){
			sectionActive = $('section.active');
			
			if(sectionActive.next().size()){
				sectionActive.fadeOut().removeClass("active").next().fadeIn().addClass("active");
			}else{
				sectionActive.fadeOut().removeClass("active");
				$('section:eq(0)').fadeIn().addClass("active");
			}
		};

		return page;

	});