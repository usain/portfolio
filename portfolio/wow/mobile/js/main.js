
$(document).ready(function(){

 $('div[data-role="navbar"]').hide();
 
 $('a[data-role="button"]').click(function(e){
 	
 	$(e).preventDefault;

 	if(!$('div[data-role="navbar"]').hasClass('active')){
 		$('div[data-role="navbar"]').addClass('active').slideDown('slow');
 	}else if($('div[data-role="navbar"]').hasClass('active')){
 		$('div[data-role="navbar"]').removeClass('active').slideUp('slow');
 	}
 	



 })//end of button click

});//end of the ready function