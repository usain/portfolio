<?php
/*
Template Name: Contact 
*/
$contactPod     =   pods('contact');
$params         = array('orderby' => 'name ASC' , 'limit' => -1 );
$contactPod->find($params);

get_header(); 
?>



<aside class="contact">

                  <h3><?php echo $contactPod->field('contact');?></h3>
                  <p><?php echo $contactPod->field('intro');?></p>
                </aside>

                <div class="primary clearfix">
                  <form class="contact-form clearfix" action="<?php bloginfo('template_url');?>/send-mail.php" method="post">

					<p id="status"></p>

                    <div class="clearfix">
                        <label for="name">Name*:</label>
                        <input type="text" id="name" name="name">
                    </div>
                    
                    <div class="clearfix">
                        <label for="email">Email*:</label>
                        <input type="text" id="email" name="email">
                    </div>
                    
                    <div class="clearfix">
                        <label for="message">Message*:</label>
                        <textarea name="message" id="message"></textarea>
                    </div>

                    <div>
                        <p>*necessary fields</p>
                    	<label>&nbsp;</label>
                        <input class="button" type="submit" value="Send" />		
                    </div>
						 <input id="spam" class="hidden" name="spam" type="text" value="" />
                  </form>
                </div>  

<?php get_footer();?>