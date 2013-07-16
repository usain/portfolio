<?php
/*
Template Name: Projects 
*/
get_header(); 

	pods_var(-1, 'url');

?>

	<div class="middle clearfix">
		<?php echo nggShowalbum(pods_var(-1, 'url'), 'extend');?>
	</div>                    
            
<?php get_footer();?>