//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=143979718949629";
//    fjs.parentNode.insertBefore(js, fjs);
//} (document, 'script', 'facebook-jssdk'));

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=143979718949629";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function () {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46089701-1', 'omeriko9.com');
  ga('send', 'pageview');

/*
$(window).scroll(function(e) {
    // Get the position of the location where the scroller starts.
    var scroller_anchor = $(".scroller_anchor").offset().top;
     
    // Check if the user has scrolled and the current position is after the scroller start location and if its not already fixed at the top 
    if ($(this).scrollTop() >= scroller_anchor && $('.scroller').css('position') != 'fixed') 
    {    // Change the CSS of the scroller to hilight it and fix it at the top of the screen.
      
       $('ul').css({
           
            'position': 'fixed',
    'margin':'0 auto',
    'vertical-align':'middle',
    'width':'100%',
    
    'font-size': '16px',
    'font-family': 'Tahoma, Geneva, sans-serif',
    
    'text-align': 'center',
    'background-color': 'rgba(50, 20, 50, .33)',
    'border-radius': '0px',
    'box-shadow': '0px 6px 15px #CCC',
    
            
        });
       
       $('#logo').css({
           
            'height': '0',
        });
           $('#menu').css({
           
            'background-color': 'rgba(255, 255, 255, 0)',
            'box-shadow': '0 0 0 #CCC',
        });
        // Changing the height of the scroller anchor to that of scroller so that there is no change in the overall height of the page.
       
    } 
    else if ($(this).scrollTop() < scroller_anchor && $('.scroller').css('position') != 'relative') 
    {    // If the user has scrolled back to the location above the scroller anchor place it back into the content.
         
        // Change the height of the scroller anchor to 0 and now we will be adding the scroller back to the content.
       // $('.scroller_anchor').css('height', '0px');
         
        // Change the CSS and put it back to its original position.
        //$('.scroller').css({
        //    'background': '#FFF',
        //    'border': '1px solid #CCC',
        //    'position': 'relative'
        //});
    }
});*/
