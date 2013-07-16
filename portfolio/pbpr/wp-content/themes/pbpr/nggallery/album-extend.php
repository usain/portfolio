<?php 
/**
Template Page for the album overview (extended)

Follow variables are useable :

	$album     	 : Contain information about the album
	$galleries   : Contain all galleries inside this album
	$pagination  : Contain the pagination content

 You can check the content when you insert the tag <?php var_dump($variable) ?>
 If you would like to show the timestamp of the image ,you can use <?php echo $exif['created_timestamp'] ?>
**/
?>
<?php if (!defined ('ABSPATH')) die ('No direct access allowed'); ?><?php if (!empty ($galleries)) :


// $boing = nggdb::find_album(1);

// $boing = nggdb::find_all_album( $order_by = 'id', $order_dir = 'ASC', $limit = 0, $start = 0);

global $nggdb;
$allDaAlbums = $nggdb->find_all_album( $order_by = 'id', $order_dir = 'ASC', $limit = 0, $start = 0);


//echo nggSinglePicture($previewPic);

foreach($allDaAlbums as $aAlbum){

		//var_dump($aAlbum);
	$jeepers = nggdb::find_image($aAlbum->previewpic);
?>
	<a class="project-link" href="<?php echo get_bloginfo('url').'/project/'.$aAlbum->id; ?>">
		<img src="<?php echo $jeepers->imageURL; ?>" alt="<?php echo $jeepers->alttext; ?>" />
	</a>
<?php
	//var_dump($jeepers);

	// global $galURL;
	// $galURL = get_bloginfo('url').'/gallery/'.$aAlbum->galleries[0];
	// echo $galURL;
	//echo nggSinglePicture($aAlbum->previewpic, $width = 300, $height = 100, $mode = '', $float = '', $template = '', $caption = '', $link = $galURL);
}
endif; ?>


