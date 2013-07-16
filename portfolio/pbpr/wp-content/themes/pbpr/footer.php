</section> <!--for the footer-->

<?php if (function_exists('is_pod_page')):?>
    <?php if (is_pod_page()):?>
 
        
         <footer class="clearfix">
                <a class="icon-twitter" href="https://twitter.com/PB__PR"></a>
                <a class="icon-facebook" href="https://www.facebook.com/pbpbprpr?fref=ts"></a>
                <a class="icon-envelope" href="<?php echo get_bloginfo('url');?>/contact"></a>
                  <p>©PBPR Site Built by Dylan John Scott</p>
        </footer>
    
<?php endif;?>
<?php endif;?>


        </div>
          
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="<?php bloginfo('template_url');?>/js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
        <script src="<?php bloginfo('template_url');?>/js/vendor/fitvids.js"></script>
        <script src="<?php bloginfo('template_url');?>/js/vendor/jquery.flexslider-min.js"></script>
        <script src="<?php bloginfo('template_url');?>/js/custom/jquery.formvalidation.js"></script>
        <script src="<?php bloginfo('template_url');?>/js/main.js"></script>
        <?php wp_footer();?>
    </body>
</html>
