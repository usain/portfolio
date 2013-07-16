<?php
/*
Template Name: Vision 
*/

$visionPod		=	pods('vision');
$params = array('orderby' => 'name ASC' , 'limit' => -1);
$visionPod->find($params);

get_header(); 
?>
            
              <img src="<?php echo $visionPod->display('image');?>" alt="" class="hero" />

				<?php $visionPod->reset(); $visionPod->fetch();?>
              <div class="vision">
                  <h3><?php echo $visionPod->field('name');?></h3>
                  <?php echo $visionPod->field('vision')?>
              </div>
<?php get_footer();?>