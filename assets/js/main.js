
// QSD Master JS Script
$(document).ready(function(){
	
	// Social Button Roll Over

	$("li.facebook a img").on("mouseenter", function () {
	   $("li.facebook a img").attr( "src", "assets/img/icons/facebook_icon_hover.png" );
	});
	$("li.facebook a img").on("mouseleave", function () {
	   $("li.facebook a img").attr( "src", "assets/img/icons/facebook_icon.png" );
	});
	$("li.pintrest a img").on("mouseenter", function () {
	   $("li.pintrest a img").attr( "src", "assets/img/icons/pintrest_icon_hover.png" );
	});
	$("li.pintrest a img").on("mouseleave", function () {
	   $("li.pintrest a img").attr( "src", "assets/img/icons/pintrest_icon.png" );
	});
	
	// Close Roll Over
	$("a.hide-video img").on("mouseenter", function () {
	   $("a.hide-video img").attr( "src", "assets/img/icons/close_icon.png" );
	});
	$("a.hide-video img").on("mouseleave", function () {
	   $("a.hide-video img").attr( "src", "assets/img/icons/close_icon_hover.png" );
	});
	
	
	// Video Player
	
	var myPlayer = videojs("qsd_video");
	
	videojs("qsd_video").ready(function(){
	
	  var myPlayer = this;
	  
	  
	  $(".explainer-video-btn").on("click", function(){
		 	//$(".video-js .vjs-tech").attr( "position", "static" );		
		 	$(".explainer-video").slideDown(1000);
		 		myPlayer.play();
		 	
		 	var startPlayAfter25 = function(){
			 	//console.log("It Worked!");
			 	var howMuchIsDownloaded = myPlayer.bufferedPercent();
			 	//console.log(howMuchIsDownloaded);
			 	if(howMuchIsDownloaded > 0.25){
				 	//myPlayer.pause();
			 	}
		 	}
		 	
		 	startPlayAfter25();
		 	
		});
		
		$(".hide-video").on("click", function(){
		 	myPlayer.pause();
		 	$(".explainer-video").hide(3000);
		 	/* $(".hide-video").attr( "display", "none" ); */
		});
		var closeVideo = function (){
		   var myPlayer = this;
		   $(".explainer-video").hide(3000);
		}
		myPlayer.on("ended", closeVideo);
	   
	   
	   $(".vjs-default-skin .vjs-fullscreen-control").on("click", function(){
		 	$("#qsd_video").toggleClass("video-js vjs-tech");
		 	$("#qsd_video .vjs-control-bar").toggleClass("vjs-control-bar, vjs-control-bar-toggle");;
		});
		
	   
	
	});
	
	
	
	
	
	
	
});
