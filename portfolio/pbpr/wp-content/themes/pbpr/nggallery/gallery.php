<?php 
/**
Template Page for the gallery overview

Follow variables are useable :

	$gallery     : Contain all about the gallery
	$images      : Contain all images, path, title
	$pagination  : Contain the pagination content

 You can check the content when you insert the tag <?php var_dump($variable) ?>
 If you would like to show the timestamp of the image ,you can use <?php echo $exif['created_timestamp'] ?>
**/
?>
<?php if (!defined ('ABSPATH')) die ('No direct access allowed'); ?><?php if (!empty ($gallery)) : ?>

				<div class="flexslider">
                    <ul class="slides">

                    	<?php foreach ($images as $image):?>

                        <li data-thumb="slide1-thumb.jpg">
                        	<?php if (!$image->hidden) {?>
                            	<img src="<?php echo $image->imageURL ?>" alt="<?php echo $image->alttext ?>" />
     						<?php }?>
                        </li>
                        
                    	<?php endforeach;?>

                    </ul>
                </div>

<?php endif; ?>