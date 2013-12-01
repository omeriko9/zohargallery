// Facebook

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=143979718949629";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google+

(function () {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

// Twitter
 
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Google Analytics

 
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46134321-1', 'zohargallery.com');
  ga('send', 'pageview');


  
   function calcHeight()
         {
         var the_height=document.getElementById('iframe').contentWindow.document.body.scrollHeight;
         document.getElementById('iframe').style.height= the_height+"px";
           $('#iframe').hide();
           $('#iframe').fadeIn(400);
           $('#loaderWarp').hide();
            $('#footer').show();
         }

   function clearHeight()
         {
           $('#loaderWarp').show();
          	$('#iframe').hide();
          	
        
        	$('body',window.parent.document).scrollTop(0);
         	window.parent.document.getElementById('iframe').style.height= "0";

              	$('#footer').hide();  
         }


