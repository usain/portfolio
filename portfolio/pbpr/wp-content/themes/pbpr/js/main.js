(function($){

	//alert('hello this is connected');
	$(".main").fitVids();
	//write an if else statement to check if the class name 'flexslider' exists. if so run function.
	if ($('div').hasClass("flexslider")){
		$('.flexslider').flexslider({
			animation: "none",
			controlNav: "thumbnails"
		});
	};
	
	if ($('form').hasClass("contact-form")){
		$('.contact-form').formvalidation();
	};

})(jQuery)