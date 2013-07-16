<?php
/*
Template Name: Blog 
*/

get_header(); 
?>
              
              <div class="primary clearfix">
                
              <?php query_posts('post_type=post&post_status=publish&posts_per_page=5&paged='. get_query_var('paged')); ?>

              <?php if( have_posts() ): ?>

                <?php while( have_posts() ): the_post(); ?>

                <div id="post-<?php get_the_ID(); ?>" <?php post_class(); ?>>
                    
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

                    <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( array(200,400) ); ?></a>

                    <?php excerpt(20,'...'); ?>

                    <span class="meta"><strong><?php the_time('F jS, Y'); ?></strong></span>

                    <!-- / <strong><span class="comments"><?php comments_popup_link(__('0 comments','example'),__('1 comment','example'),__('% comments','example')); ?></strong> -->
 
                </div>
 
               <?php endwhile; ?>

              <!-- <div class="navigation">
                <span class="newer"><?php previous_posts_link('« Newer','example') ?></span> 
                <span class="older"><?php next_posts_link(__('Older »','example')) ?></span>
              </div>--> 

             <?php endif; wp_reset_query();?>
        


              </div><!-- end of primary  -->

                
              <?php get_sidebar();?>   
            
<?php get_footer();?>