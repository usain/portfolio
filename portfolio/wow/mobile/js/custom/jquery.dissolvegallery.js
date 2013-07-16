//jQuery Custom Plugin Template

//create a private scope
(function($){

	//create jQuery function
	$.fn.dissolvegallery = function(){
		
		//return the wrapped set and loop through the set and apply functionality to each member of the set
		return this.each(function(){
			
			/*------------------Declare variables--------------------*/
	var $gallery = $(this),										 
	 thumbOpacity = .65,
	 thumbSpeed = 200,
	 dissolveSpeed = 400,
	 currentIndex = 0,
	 $thumbs = $gallery.find(".thumbs img"),
	 $images = $gallery.find(".images img"),
	 $nextBtn = $gallery.find(".next-btn"),
	 $prevBtn = $gallery.find(".prev-btn"),
	 numImages = $images.length;
		
	/*------------------ Initialisation -------------------*/
		
	//initialise thumbs
	$thumbs.css({"opacity":thumbOpacity}).eq(currentIndex).addClass("selected").css({"opacity":1});
	
	//initialise images - stack on top of each other, hide them all and fade in the 1st image
	$images.parent().css({"position":"relative"});
	$images.css({"position":"absolute"}).hide().eq(currentIndex).fadeIn(dissolveSpeed);
	
	
	/*------------------ Thumbs Hover --------------------*/

	$thumbs.hover(function(){
	
		$(this).stop().fadeTo(thumbSpeed, 1);
		
	},function(){
		if(!$(this).hasClass('selected')){	
			$(this).stop().fadeTo(thumbSpeed, thumbOpacity);
		}
			
	});
	
	/*------------------ Thumbs Click --------------------*/
	
	$thumbs.click(function(){
		
		var thisIndex = $thumbs.index(this);
		//only change image if NOT already selected
		if(thisIndex != currentIndex){
			changeImage(thisIndex)
		}
		
	});
	
		/*---------------------- Next and Previous Btns -----------------------*/
	 
	$nextBtn.click(function(){
		
		if(currentIndex<numImages-1){
			changeImage(currentIndex+1);
		}else{
			changeImage(0);
		}
	 
	});
		
	$prevBtn.click(function(){
		
		//update the current index
		if(currentIndex>0){
			changeImage(currentIndex-1);
		}else{
			changeImage(numImages-1);
		}
	
	});
	
	/*---------------------- Change Image Function -----------------------*/
	
	function changeImage(newIndex){
		
		//remove selected state from previous selected thumb
		$thumbs.eq(currentIndex).removeClass("selected").fadeTo(thumbSpeed, thumbOpacity);
		//fade out previous selected image
		$images.eq(currentIndex).stop(true, true).fadeOut(dissolveSpeed);
			
		//update the current index to the index of the clicked on thumb
		currentIndex = newIndex;
			
		//fade in the selected image and add selected class to thumb
		$images.eq(currentIndex).stop(true, true).fadeIn(dissolveSpeed);
		$thumbs.eq(currentIndex).addClass("selected").fadeTo(thumbSpeed, 1);
		
	}
			
		}); //end each()
		

	};//end $.fn.customplugin

		  
})(jQuery);