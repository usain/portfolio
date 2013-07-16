// swfObject //
swfobject.embedSWF("advertising/lumbanner.swf", "flashContent", "300", "250", "10");
swfobject.embedSWF("advertising/160x600.swf", "flashContent2", "160", "600", "10");

$(document).ready(function() {
	/*
	 *  Simple image gallery. Uses default settings
	 */
    $('.fancybox').fancybox();

    $('.flexslider').flexslider({
    animation: "slide"
 	});


});

// Can also be used with $(document).ready()

  