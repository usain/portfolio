<?php
/*
Template Name: Strategy 
*/

$strategyPod  = pods('strategy');
$params       = array('orderby' => 'id DSC', 'limit' => -1);
$strategyPod->find();

get_header(); 
?>
            
              <img src="<?php echo $strategyPod->display('image');?>" alt="<?php echo $strategyPod->field('image.alttext');?>" class="hero" />

  <?php $strategyPod->reset(); while($strategyPod->fetch()):?>
              <div class="strategy">
                  <h3><?php echo $strategyPod->field('name');?></h3>
                  <?php echo $strategyPod->field('description');?>
              </div>
  <?php endwhile;?>
              
<?php get_footer();?>