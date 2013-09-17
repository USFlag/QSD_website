
$(document).ready(function(){
// Video Player
	
	var myPlayer = videojs("qsd_video");
	
	videojs("qsd_video").ready(function(){
	
	  var myPlayer = this;
	  
	  
	  $(".explainer-video-btn").on("click", function(){
		 	//$(".video-js .vjs-tech").attr( "position", "static" );		
		 	$(".explainer-video").slideDown(1000);
		 	
		 	var startPlayAfter25 = function(){
			 	//console.log("It Worked!");
			 	var howMuchIsDownloaded = myPlayer.bufferedPercent();
			 	//console.log(howMuchIsDownloaded);
			 	if(howMuchIsDownloaded > 0.25){
				 	myPlayer.play();
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