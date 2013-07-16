<?php
/*
Template Name: Blog Single Post
*/ 
	get_header();
?>

	<div class="primary clearfix">
<?php if ( have_posts() ) : the_post(); ?>
	<div class="blog-single clearfix">
		<h2><?php echo the_title();?></h2>
		<?php echo the_content();?>
		
		
		<?php echo the_author_nickname();?> 
	</div>

<?php else: ?>
	
	<p>I am sorry but there are no posts to display!</p>

<?php endif; ?>

	</div>

	<?php get_sidebar();?>

<?php get_footer();?>            