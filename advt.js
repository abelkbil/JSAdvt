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
  document.write("CLIENT ID :- "+fb_ad_client+"<br>");
  document.write("SCREEN WIDTH :- "+fb_ad_width);

	})();
