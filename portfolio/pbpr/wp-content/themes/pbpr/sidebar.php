<?php
/*
Temaplate Name: Sidebar
*/

$linksPod   = pods('links');
$params = array('orderby' => 'id ASC' , 'limit' => -1);
$linksPod->find($params);

?>


  <aside class="socialbar clearfix">
      <a class="twitter-timeline" href="https://twitter.com/PB__PR" data-widget-id="328707277651578880" data-chrome="noheader nofooter transparent noscrollbar noborders">Tweets by @PB__PR</a>
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>


       <h3>Links</h3>
        <ul class="friends">
          <?php while($linksPod->fetch()):?>
              <li><a href="<?php echo $linksPod->field('link');?>"><?php echo $linksPod->field('name') ;?></a></li>
          <?php endwhile;?>    
        </ul>
        <!-- <ul> 
          <?php wp_get_archives('type=monthly'); ?>
        </ul>  -->   
      
      <div class="signup">
        <form action="http://pbpr.us7.list-manage.com/subscribe/post?u=fc2ce2c17cd35965b281dca19&amp;id=61e497e0a4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder=" email address" required />
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
        </form>
      </div>
  </aside>
