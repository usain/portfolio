/* Dylans jquery */
// ways to comment //

$('document').ready(function(){

	$('.nav-control').click(function(){

		//alert("button clicked");
		$('.contact').slideToggle("slow");

	})

	$(window).resize(function(){
		// console.log("this is resizing");
		if ($(window).width()>480){
			$('.contact').removeAttr("style");
		};

	});


});