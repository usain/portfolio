<?php
    global $navPod;
    $navPod     = pods('section');
    $params     = array('orderby' => 'name ASC' , 'limit' => -1);
    $navPod->find($params);
    // $numNav     = $navPod->total();
    // echo "Num categories: $numNav";
    // var_dump($navPod->fetch());
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title><?php bloginfo('name');?></title>
        <meta name="description" content="<?php bloginfo('description');?>">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="<?php bloginfo('template_url');?>/favicon.ico" />
        <link rel="stylesheet" href="<?php bloginfo('template_url');?>/css/normalize.css">
        <link rel="stylesheet" href="<?php bloginfo('template_url');?>/css/flexslider.css">
        <link rel="stylesheet" href="<?php bloginfo('template_url');?>/css/main.css">
        <script src="<?php bloginfo('template_url');?>/js/vendor/modernizr-2.6.2.min.js"></script>
        <script type="text/javascript">
              var _gaq = _gaq || [];
              _gaq.push(['_setAccount', 'UA-40704031-1']);
              _gaq.push(['_trackPageview']);
            
              (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
              })();
        </script>
        <?php wp_head();?>
    </head>
    <body>
      <div class="wrapper clearfix">

        <header class="clearfix">
            
            <div class="concealer clearfix">
                <a href="<?php bloginfo('url') ;?>"><img class="headerlogo" src="<?php echo getThumb($navPod->display('home.logo.ID'));?>" alt="<?php bloginfo('description');?>" /></a>
            </div>

            <nav class="clearfix">
                <ul>
                    <li><a <?php echo is_pod_page('Vision')? ' class="selected"': '';?> href="<?php bloginfo('url');?>/vision">Vision</a></li>
                    <li><a <?php echo is_pod_page('Strategy')? ' class="selected"': '';?> href="<?php bloginfo('url');?>/strategy">Strategy</a></li>
                    <li><a <?php echo is_pod_page('Us')? ' class="selected"': '';?> href="<?php bloginfo('url');?>/us">Us</a></li>
                    <li><a <?php echo is_pod_page('Showcase')? ' class="selected"': '';?> href="<?php bloginfo('url');?>/showcase">Showcase</a></li>
                    <li><a <?php echo is_pod_page('Projects')? ' class="selected"': '';?> href="<?php bloginfo('url');?>/projects">Projects</a></li>
                    <li><a <?php echo is_pod_page('Blog')|| is_single()? ' class="selected"': '';?> href="<?php bloginfo('url');?>/blog">Blog</a></li>
                    <li><a <?php echo is_pod_page('Contact')? ' class="selected"': '';?> href="<?php bloginfo('url');?>/contact">Contact</a></li>
                </ul>
            </nav>
        </header>

            <section class="main clearfix"> <!--for the header-->