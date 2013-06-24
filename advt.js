(function() {
	fb_ad_width=240;
	console.log(fb_ad_client);
	function getWidth()
  {
    xWidth = null;
    if(window.screen != null){
      xWidth = window.screen.availWidth;
      fb_ad_width = xWidth;
      }
  }
  getWidth();
 //document.write("CLIENT ID :- "+fb_ad_client+"<br>");
 // document.write("SCREEN WIDTH :- "+fb_ad_width);
  var to = window.fb_ad_client;
if ( to ) {
  // prevent cross-site scripting attacks
 // to = unescape( to.toString() );
 // to = to.replace(/</g, '&lt;');
 // to = to.replace(/>/g, '&gt;');
  // send our output along
  var img=240;
  if(fb_ad_width>240){
  	img=340;
  }
  document.write( '<img src="'+img'.jpg">');
}
	})();
//http://feather.elektrum.org/book/src.html
