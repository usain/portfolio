<?php
	//phpinfo();
	ini_set('display_errors',1); 
 	 	// error_reporting(E_ALL);
        
        function getThumb($imageID){
		# wp_get_attachment_image_src requires image ID as first argument, so pass ID value only into function
		# e.g. getThumb(   $gigsPod->display('venue.image.ID')   );
		$imageArray	=	wp_get_attachment_image_src($imageID, 'medium');
		//var_dump($imageArray);//[0];
		return($imageArray[0]);
	}

	// function categoryNav(){
	// 	global $navPod;
	// 	while($navPod->fetch()):
	// 		$name		=	$navPod->field('name');
	// 		$permalink	=	$navPod->field('permalink');
 // 			$urlLink	=	pods_var(-1,'url');

 //        	echo '<li><a href="'.get_bloginfo('url').'/'.$permalink.'">'.$name."</a></li>\n";
 //        endwhile;
	// }

	function excerpt($limit,$text) {
		global $post;

		$output 	= 	$post->post_excerpt;
		if($output!=''){
			$excerpt = $output;
		}else{
			$excerpt = explode(' ',get_the_excerpt(), $limit);
			array_pop($excerpt);
			$excerpt = implode(" ",$excerpt).$text;
		}
		echo $excerpt;
	}

	add_theme_support('post-thumbnails');