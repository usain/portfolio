$(document).ready(function(){

/*--------------------------------- variables --------------*/	

	var currentIndex 	= 0,
		$sections		= $('section'),
		$wrapper		= $('.wrapper'),
		duration 		= 2500,
		topMargin 		= parseInt($wrapper.css('margin-top')),
		$page			= $('html, body');

/*--------------------------------- Hover state for borders --------------*/

websiteLink($('.showcaseOne, .showcaseTwo, .dropdown'));

function websiteLink(borderChange){

	borderChange.hover(
		function(){
			$(this).stop().animate({
				'border-top-color':'#FF3F3F',
				'border-right-color':'#FF950D',
				'border-bottom-color':'#AA3F3F',
				'border-left-color':'#AA3F3F'
			},'fast');
		},function(){
			$(this).stop().animate({
				'border-top-color':'#F65857',
				'border-right-color':'#F65857',
				'border-bottom-color':'#F65857',
				'border-left-color':'#F65857'
			},'slow');
		}
	);//end of the hover function

};//end of function
	
/*--------------------------------- dropdown --------------*/	

	$('.showcaseTwo, .showcaseOne').click(function(){

		if ($('.dropdown').is(':visible')) {

			$('.dropdown').slideUp('slow');

		};

      	if($(this).next($('.dropdown')).is(':hidden')){

        	$(this).next($('.dropdown')).slideDown('slow');

   //      	if($('.dropdown').is(':visible')){

   //      		var scrollEnd = $(this).next($('.dropdown')).offset().top;
   //      		// alert('There is a dropdown already out');
   //      		$page.animate({
			// 	scrollTop:scrollEnd},
			// 	duration,
			// 	"swing");

			// }

      	}else{

      		$('.dropdown').slideUp('slow');

      	};//checks if the dropdown is down if then slide up else slide down

    $('.dropdown').click(function(){

        	$(this).hide();

      	});

  });//end of click function*/
	
/*------------------ Nav click handler --------------------*/

	$('header a, .backToTop').click(function(e){

		e.preventDefault();
		var id = $(this).attr("href");
		var scrollEnd = $(id).offset().top-10;
		$page.animate({
			scrollTop:scrollEnd},
			duration,
			"swing");
		console.log(topMargin);
	});

/*------------------ Waypoints selected nav states--------------------*/

	$sections.waypoint(function(direction){
		
		$('nav ul a').eq(currentIndex).removeClass("selected");
		
			if(direction==="down"){
				currentIndex = $sections.index($(this));
				console.log(currentIndex);
			}else{
				currentIndex = $sections.index($(this))-1;
				console.log(currentIndex);
			}
		
		$('nav ul a').eq(currentIndex).addClass("selected");
		
	}, {offset: "25%"});
/*--------------------------------- Custom tooltips over 'skill pipes'.--------------*/

	$( document ).tooltip({
      	position: {
        my: "center bottom-20",
        at: "center top",
        delay: 5000,
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });

/*--------------------------------- canvas animations --------------*/	
//dimensions of canvas are 310 X 40

	html = {x : 310, y : 0, width : -10, endPoint: -300, height: 40, name :'html', speed: 20, color :'#f46622'}
	css = {x : 310, y : 0, width : -10, endPoint: -290, height: 40, name :'css', speed: 20, color :'#339dd5'}
	jquery = {x : 310, y : 0, width : -10, endPoint: -240, height: 40, name :'jquery', speed: 20, color :'#111a2a'}
	git = {x : 0, y : 0, width : 10, endPoint: 130, height: 40, name :'git', speed: 20, color :'#f15034'}
	php = {x : 0, y : 0, width : 10, endPoint: 150, height: 40, name :'php', speed: 20, color :'#5969a4'}
	wp = {x : 0, y : 0, width : 10, endPoint: 150, height: 40, name :'wordpress', speed: 20, color :'#1c769f'}

	function wpAnimate(){

		var canvas 	= document.getElementById(wp.name);
		context = canvas.getContext('2d');

		if(wp.width < wp.endPoint){
		   wp.width += 3.1;
		}
		draw(wp);

		setTimeout(wpAnimate,wp.speed);
	}

	function phpAnimate(){

		var canvas 	= document.getElementById(php.name);
		context = canvas.getContext('2d');

		if(php.width < php.endPoint){
		   php.width += 3.1;
		}
		draw(php);

		setTimeout(phpAnimate,php.speed);
	}

	function gitAnimate(){

		var canvas 	= document.getElementById(git.name);
		context = canvas.getContext('2d');

		if(git.width < git.endPoint){
		   git.width += 3.1;
		}
		draw(git);

		setTimeout(gitAnimate,git.speed);
	}

	function jqueryAnimate(){

		var canvas 	= document.getElementById(jquery.name);
		context = canvas.getContext('2d');

		if(jquery.width > jquery.endPoint){
		   jquery.width -= 3.1;
		}
		draw(jquery);

		setTimeout(jqueryAnimate,jquery.speed);
	}

	function cssAnimate(){

		var canvas 	= document.getElementById(css.name);
		context = canvas.getContext('2d');

		if(css.width > css.endPoint){
		   css.width -= 3.1;
		}

		draw(css);

		setTimeout(cssAnimate,css.speed);
	}

	function htmlAnimate(){

		var canvas 	= document.getElementById(html.name);
		context = canvas.getContext('2d');

		if(html.width > html.endPoint){
		   html.width -= 3.1;
		}

		draw(html);

		setTimeout(htmlAnimate,html.speed);
	}

	function draw(language){

		context.beginPath();
		context.rect(language.x, language.y, language.width, language.height);
		context.fillStyle = language.color;
		context.fill();

	}

/*--------------------------------- canvas animation --------------*/			
	
	$('.sceneTwo').waypoint(function(direction){
		
			htmlAnimate(html);
			cssAnimate(css);
			jqueryAnimate(jquery);
			gitAnimate(git);
			phpAnimate(php);
			wpAnimate(wordpress);

	}, {offset: "25%"});

/*--------------------------------- show speech bubble after #seconds --------------*/
	
	setTimeout(speak,5000);

	function speak(){
		$('.speechBubble').fadeIn('slow');
	}
	
/*--------------------------------- contact form  --------------*/

	if ($('form').hasClass("contact-form")){
		$('.contact-form').formvalidation();
	};


});//this is the end of ready!
