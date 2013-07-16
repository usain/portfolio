<?php
/*
template name: home
*/
	$homePod	= pods('home');
	$params 	= array('orderby' => 'id ASC' , 'limit' => -1);
	$homePod->find($params);

	get_header();
?>
        <iframe class="mainvideo" src="<?php echo $homePod->field('video');?>?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1&amp;loop=0"></iframe>

    <?php if ($homePod->display('image')): ?>
    	<img class="mainlogo" src="<?php echo $homePod->display('image');?>" alt="<?php bloginfo('title');?>"/>
    <?php endif ?>
        

<?php get_footer();?>            