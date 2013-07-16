$(document).ready(function(){

//=============================================variables
	
	//stripes height var
	var $wrapper = $('.wrapper'),
	$stripes = $('.stripes'),
	stripeHeight = $wrapper.height(),
	//smooth scroll
	duration = 2500,
	topMargin = parseInt($wrapper.css('margin-top')),
	$header = $('header'),
	$go = $('#navigation a'),
	$page = $("html, body"),
	$sections = $("section"),
	currentIndex = 0,
	//stopping nav from obscuring footer
	footerTop = $('footer').offset().top,
	footerDifference = (stripeHeight - footerTop),
	//entries and social box variables
	$linkBox1 = $('.slideup'),
	$linkBox2 = $('.slideup2'),
	$slideLinks = $('.slideup a'),
	$register = $('.register'),
	$social = $('.social'),
	//setting height and width for resize function
	h = $(window).height(),
	w = $(window).width(),
	$structure = $('.transition, section'),
	//overlay variable
	$overlay,
	$overlayContent;
	//accordion gallery winners
	var $title = $('.winner-gallery h3'),
	$firstTitle = $('.winner-gallery h3:first'),
	$years = $('.years')
	$firstYear = $('.years:first');
	//accordion gallery tickets
	var $ticketTitle = $('#tickets h3'),
	$firstTicketTitle = $('#tickets h3:first'),
	$ticketInfo = $('.ticket-info'),
	$firstTicketInfo = $('.ticket-info:first');
	//story slide gallery 
	var $gallery = $('.gallery'),
	dissolveSpeed = 400,
	currentIndexStory = 0, 
	$chapters = $('.images figure'),
	$nextBtn = $('.next-btn'),
	$prevBtn = $('.prev-btn'),
	numChapters = $chapters.length;


	//console.log($navCheckPoint);
//============================================= setting the section + slide heights + transition divs

	$structure.height(h - 200);

	$(window).resize(function() {
		h = $(window).height();
		w = $(window).width();
  	//console.log('height: ' + h +' ,width: '+ w)
  	$structure.height(h - 175);
	});

//=============================================set the height of the stripes layer to the height of the wrapper

	console.log(stripeHeight);
	$stripes.css({'height':stripeHeight});

//============================================= sticky nav
	
	/*------------------ Initialise --------------------*/
	$go.eq(currentIndex).addClass("selected");
	//console.log($navItems);
	
	/*------------------ Nav click handler --------------------*/
	$go.click(function(e){
		e.preventDefault();
		var id = $(this).attr("href");
		var scrollEnd = $(id).offset().top-topMargin;
		$page.animate({
			scrollTop:scrollEnd},
			duration,
			"swing");
		console.log(topMargin);
	});

	$('.enter').click(function(e){
		e.preventDefault();
		var id =$(this).attr("href");
		var scrollEnd = $(id).offset().top-topMargin;
		$page.animate({
			scrollTop:scrollEnd},
			duration,
			"swing");

	});//end of entries main page link
		
	/*------------------ Waypoints selected nav states--------------------*/
		$sections.waypoint(function(direction){
			
			$go.eq(currentIndex).removeClass("selected");
			
			if(direction==="down"){
				currentIndex = $sections.index($(this));
			}else{
				currentIndex = $sections.index($(this))-1;
			}
			
			$go.eq(currentIndex).addClass("selected");
			
		}, {offset: "50%"});
		

	/*------------------ Waypoints sticky nav --------------------*/
	$header.waypoint(function(direction){
		
		if(direction==="down"){
			//if the scroll direction is down then fix the nav ul to the top of the screen
   			$(this).find('nav').css({
   				position:'fixed', 
   				bottom: 0
   			});
   			console.log('down');
		}else{
			//if the scroll direction is up then position the nav ul back in the document flow
			$(this).find('nav').css({position:'static'});
			console.log('up');
		}
		
	}, {offset: "90%"});
	/*------------------ adjust position of nav at last section --------------------*/

	//console.log($sections.last());
	//var footerTop = $('footer').height();

	$('#media').waypoint(function(direction){
		
		$('nav').stop().animate({
			
			bottom: footerDifference
			
			}, 'slow');
		
		if(direction==="up"){
			
			$('nav').stop().animate({
			
				bottom : 0
			
			}, 'slow');
		};

	}, {offset:'50%'});

//============================================= slide up box for entry and tickets

	//init the slide down state of the .slideup div

	linkBox($register);
	linkBox($social);


//============================================= accordion gallery div sliders
	//init the state of the .years containers and selected state on first title

	$firstTitle.addClass('selected');
	$years.hide();
	$firstYear.show();


	//a click function that shows div if it is rolled up and hides div if showing

	$title.click(function(){
		$years.slideUp('slow');
		$title.removeClass('selected');
		var $yearContent = $(this).next();
		$title = $(this);


			accordion($yearContent, $title);
				

	});//end of years click function

//============================================= accordion tickets and information


	$firstTicketTitle.addClass('selected');
	$ticketInfo.hide();
	$firstTicketInfo.show();

	$ticketTitle.click(function(){
		$ticketInfo.slideUp('slow');
		$ticketTitle.removeClass('selected');
		var $infoContent = $(this).next();
		$ticketTitle = $(this)

			accordion($infoContent, $ticketTitle);

	});//end of years click function

//============================================= thumbs carousel

//wrap a div around the images within the div class .years

//find the number of divs called years within dom

	var $yearsMaskWidth = $years.width(),  
	numDivYears = ($years.length-1);


//create afor loop that cycles through the years divs

	for( var i = 0; i <= numDivYears; i++){

		wrapThumbs($('.years').eq(i))

	};

	var $thumbs = $('.thumb-slider img');

	$years.append('<div class="next thumb-button"></div>','<div class="prev thumb-button"></div>');

//****************************** Chrome fix for image width ********************
// load the images in a function
	$thumbs.load(function(){
//setting the width of the thumbslider to eq width of thumbs * number of thumbs
			//the thumbslider that is showing 
			var $thumbSlider = $('.years').find($('.thumb-slider')),
			numSlider = $thumbSlider.length-1,
			thumbsWidth = $thumbs.outerWidth(true);
			//numThumbs = $thumbs.length;
			//console.log(numSlider+' and '+thumbsWidth+' and '+numThumbs);
			//console.log(numThumbs);

		//creating an array to be filled with the number of images in each slider

		var thumbArr = [],
		lengthArr = [];

		for( var i = 0; i <= numSlider; i++){
			
			var numThumbs = $thumbSlider.eq(i).find('img').length;
			//console.log($thumbSlider.eq(i).find('img').length);
			thumbArr.push(numThumbs);
			var sliderLen = thumbArr[i]*thumbsWidth;
			//console.log(sliderLen+' px');
			lengthArr.push(sliderLen);
		//setting the widths of the thumb slider divs based on the images inside
				$thumbSlider.eq(i).width(lengthArr[i]); 

		}//end of for loop

		//click on the next button and decrease the margin-left value of thumbslider by the image outerwidth*currentindex.
		//console.log($thumbSlider.css('margin-left',-thumbsWidth));
		//set the button vars
		var $next = $('.next'),
		$prev = $('.prev'),
		//set the number of slides visible per click
		slideNumber = 5,
		//store the slider position
		sliderPos = 0,
		//set the thumbslide distance
		slideDistance = thumbsWidth*slideNumber,
		//calculate the next limit
		nextLimit = $yearsMaskWidth - $thumbSlider.width(),
		prevLimit = 0;

		$prev.hide();
		//console.log(nextLimit);
		//clicking on the title changes the marginleft values back to 0

		//create a click function on the next button
		$next.click(function(){
			
			//show the prev 
			$prev.fadeIn(300);
			//subtract the thumb slide distance from the sliderpos
			sliderPos -= slideDistance;
			//if thumb slider position past the limit then set it to the limit
			if(sliderPos < nextLimit){

				sliderPos=nextLimit;
			}

			$thumbSlider.stop().animate({'margin-left':sliderPos},200, 'swing');

			if(sliderPos === nextLimit){

				$next.fadeOut(300);

			}
			
		});//end of $next.click
		//console.log(sliderPos);
		//create a click handler for the prev 

		$prev.click(function(){

			$next.fadeIn(300);

			sliderPos += slideDistance;
			//console.log(sliderPos);
			//if thumb slider position past 0 then set it to 0
			if(sliderPos > 0){

				sliderPos=0;

			}
			console.log(sliderPos);
			$thumbSlider.stop().animate({'margin-left':sliderPos},200, 'swing');

			if(sliderPos === 0){

				$prev.fadeOut(300);

			}

		});//end of prev click handler

	});// end of $thumbs.load

//***************************************************** created the thumbnail carousel after much working. it is verylaggy. maybe due to it being in an onload function? or the for loops? i am not sure.

//============================================= hover states for thumbs

	//init the state of the thumbs

	$thumbs.fadeTo(0,0.7);

	$thumbs.hover(function(){

		$(this).fadeTo(1,1);

	},function(){

		$thumbs.fadeTo(0,0.7);

	});

//============================================= stripped back lightbox

	 //http://www.devblog.co/creating-a-custom-jquery-lightbox-effect-from-scratch/
	 
	

//============================================= overlay created >> click function

	 $('a[data-image=lrg]').click(function(e){
	 	e.preventDefault();
	 	//console.log(($('figure').css('z-index')) +' and '+($overlay.css('z-index')));

		//create the overlay
		
		//$overlay = $('.overlay');
		//$overlayContent = $('.overlay-content');

	 	var imageNum = ($(this).find('img').attr('src').substring(18,20));

	 	console.log(imageNum);

	 	//concatenate the var imageNum with the string >> "img/winners/Images" + imageNum
	 	var linkString = ("img/winners/Images" + imageNum+".jpg");

	 	console.log(linkString);

	 	$(this).attr('href', linkString);

	 	//get the alt tag info and cut it into useable var values that can be placed into appro tags in the figcaption

	 	var newAnchor = $(this).attr('href'),
	 	winnerInfo = $(this).find('img').attr('alt'),
	 	//winnerTitle = winnerInfo.substring(0,winnerInfo.indexOf(',')),
	 	winnerTitle = $(this).find('img').attr('title'), 
	 	winnerName = winnerInfo.substring(0,winnerInfo.indexOf('-')),
	 	winnerCategory = winnerInfo.substring(winnerInfo.indexOf('  '),winnerInfo.indexOf('.'));

	 	console.log(winnerTitle);

	 	//add a content div filled with empty elements to the DOM 
	 	//incl an img tag first. the src to be filled with newAnchor

	 	overlay();

	 	$('.overlay-content').append('<figure><img src='+newAnchor+' class="image-large" /><figcaption><h4>'+winnerTitle+'</h4><h5>'+winnerName+'</h5><p>'+winnerCategory+'</p></figcaption></figure>');

	 	//create a click state on the overlay that fades it out aswell as removing the content 

	 	

		});//end of thumb gallery click function

//============================================= competition category overlay

//============================================= story slide gallery plugin

	//init the chapters - stack one on top the other, hide them and fade in 1st one
	$chapters.parent().css({"position":"relative"});
	$chapters.css({"position":"absolute"}).hide().eq(currentIndexStory).fadeIn(dissolveSpeed);

	/*---------------------- Next and Previous Btns -----------------------*/

	$nextBtn.click(function(){

		if(currentIndexStory<numChapters-1){
			changeImage(currentIndexStory+1)
		}else{
			changeImage(0)
		}

	});

	$prevBtn.click(function(){

		if(currentIndexStory>0){
			changeImage(currentIndexStory-1);
		}else{
			changeImage(numChapters-1)
		}

	});


//============================================= modal window for entry categories

	//set the variables 
	var $catLink = $('.category');

	$('.category-info').hide();

	$catLink.click(function(e){
		e.preventDefault();
		//when click on link bring up overlay with image, information included this could be accom with a figure tag.
		//basically as above
		//empty the overlay of any content inside

		overlay();
		//$(this).next().appendTo('.overlay-content');
		$(this).next().show();
		//$overlayContent.empty();


	});//end of category link click

//============================================= modal window for register form

	//set the variables
	var $regLink = $('.reg-form');


	$('.contact-form').hide();

	//create a click function that loads in the form via ajax
	$('.wrapper').on('click','.reg-form',function(e){

		e.preventDefault();

		overlay();

		//$('.overlay-content').empty();

		$('.overlay-content').append($('.contact-form'));
		$('.contact-form').show();


		});

	$('.contact-form').formValidation(); //trying to implement a formvalidation plugin

//============================================= resize overlay on screen size change

	$(window).resize(function(){

		$('.overlay').css({'height':h,'width':$(window).outerWidth()})

		});

//============================================= change the source path for the video

	var $player = $('iframe');
	var path = $('.videowrap img').eq(0).data('source');

	setVid(path);


	$('.videowrap img').click(function(){
		path = $(this).data('source');
		setVid(path)
	});


//============================================= hover state for the video thumbs
	$('.titles ').hover(function(){
		$(this).css({'cursor':'pointer'});
		$(this).find('figcaption').css({'position':'absolute','margin-top':'0'});
	},function(){
		$('.titles figcaption').css({'margin-top': '-140px'});
	});//end of video thumb hover

//============================================= functions
	//write a function that sets up the overlay on screen

	

	function overlay(){
		//add the css prop overflow-x: hidden to the body to init removing scroll bar
		 //init the overlay, could be further adapted to be dynamic.
		 var $overlay = $('<div class="overlay clearfix"></div>'),
		$overlayContent = $('<div class="overlay-content clearfix"></div>');
	 	
		$('body').css({'overflow':'hidden'});
		$overlayContent.append('<div class="exit"></div>');

		$overlay.css({'height':h,'width':$(window).outerWidth()}).hide();

		$('body').prepend($overlay);
		$overlay.append($overlayContent);
		$overlay.fadeIn('fast');

		$('.overlay-content').on('click','.exit',function(){
			//alert('clicked');
				$('body').css({'overflow-y':'scroll'});
				$overlay.fadeOut('fast');
				//alert("exit clicked");
				$('.category-info').hide();
				$('.contact-form').appendTo('.five').hide();
				$overlay.remove();
				$overlayContent.remove();
				
			});
	};//end of overlay function

	function wrapThumbs(years){
			years.wrapInner('<div class="thumb-slider clearfix"></div>')

		};//end of wrapThumbs function

	function changeImage(newIndex){

		//fade out previous selected image
		$chapters.eq(currentIndexStory).stop(true, true).fadeOut(dissolveSpeed);

		currentIndexStory = newIndex;

		$chapters.eq(currentIndexStory).stop(true, true).fadeIn(dissolveSpeed);

	};//end of image change function

	function accordion(drawer, title){
		if(drawer.is(":hidden")===true){
				drawer.slideDown('slow');
				title.addClass('selected');
			}else{
				drawer.slideUp('slow');
				title.removeClass('selected');
			};
	};//end of accordion function

		function linkBox(link){
		link.next().hide();
		link.hover(function(){
			$(this).next().stop().fadeIn('slow');
		}, function(){

			$(this).next().stop().delay('2000').fadeOut('slow');

		});
		
	};//end of function for links on nav

	function setVid(path){
		console.log(path)
		$player.attr('src', path);
	};//function to set the video paths



});//this is the end of ready!
