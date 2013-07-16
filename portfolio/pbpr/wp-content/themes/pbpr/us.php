<?php
/*
Template Name: Us 
*/
$usPods   = pods('us');
$params   = array('orderby' => 'name ASC' , 'limit' => -1 );
$usPods->find($params);

get_header(); 
?>
            
              <img src="<?php echo $usPods->display('image');?>" alt="" class="hero" />
               
        <?php $usPods->reset(); while ($usPods->fetch()):?>
              <aside class="bio">
                <h3><?php echo $usPods->field('name');?></h3>
                <?php echo $usPods->field('bio');?>
              </aside>
        <?php endwhile;?>
            
<?php get_footer();?>
