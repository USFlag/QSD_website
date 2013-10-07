
// QSD Master JS Script
$(document).ready(function(){
	
	
	// Vimeo Player API
	var iframe = $('#player1')[0],
    player = $f(iframe),
    status = $('.status');

		// When the player is ready, add listeners for pause, finish, and playProgress
		player.addEvent('ready', function() {
		    status.text('ready');
		    
		    player.addEvent('pause', onPause);
		    player.addEvent('finish', onFinish);
		    player.addEvent('playProgress', onPlayProgress);
		});
		
		// Call the API when a button is pressed
		$('a.hide-video img').bind('click', function() {
		    player.api("pause");
		});
		
		function onPause(id) {
		    status.text('paused');
		}
		
		function onFinish(id) {
		    status.text('finished');
		    $("#qsd-video").hide(3000);
		}
		
		function onPlayProgress(data, id) {
		    status.text(data.seconds + 's played');
		}
	
		
});


































