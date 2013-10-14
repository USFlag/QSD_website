
// QSD Master JS Script
$(document).ready(function(){
	
	// General
	$("#super_container").attr("style", "margin-top: 0!important;");
	
	
	// Social Button Roll Over

	$("li.facebook a img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/icons/facebook_icon_hover.png" );
	});
	$("li.facebook a img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/icons/facebook_icon.png" );
	});
	$("li.pintrest a img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/icons/pintrest_icon_hover.png" );
	});
	$("li.pintrest a img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/icons/pintrest_icon.png" );
	});
	
	// Flag Rollovers
	$(".flag-chart .feather-dancer-17 img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/17_feather_dancer_hover.png" );
	});
	$(".flag-chart .feather-dancer-17 img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/17_feather_dancer.png" );
	});
	
	$(".flag-chart .feather-dancer-13 img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/13_feather_dancer_hover.png" );
	});
	$(".flag-chart .feather-dancer-13 img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/13_feather_dancer.png" );
	});
	
	// Chart Rollovers
	$(".flag-chart .kahuna-17 img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/17_kahuna_hover.png" );
	});
	$(".flag-chart .kahuna-17 img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/17_kahuna.png" );
	});
	
	$(".flag-chart .kahuna-13 img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/13_kahuna_hover.png" );
	});
	$(".flag-chart .kahuna-13 img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/13_kahuna.png" );
	});
	
	$(".flag-chart .horizontal img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/horizontal_flag_hover.png" );
	});
	$(".flag-chart .horizontal img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/buttons/horizontal_flag.png" );
	});
	
	
	// Video Player Show/Hide
	$(".explainer-video-btn").on("click", function(){	
		 $("#qsd-video").slideDown(1000);
	});
		
	$(".hide-video").on("click", function(){
		 $("#qsd-video").hide(3000);
	});
	
	
	// Video and Desing Now CTA BTN Rollovers
	$(".start-designing-now a img").on("mouseenter", function () {
	   $(this).attr( "src", "http://qualitysigndesigner.com/assets/img/buttons/start_designing_now_btn_hover.png" );
	});
	$(".start-designing-now a img").on("mouseleave", function () {
	   $(this).attr( "src", "http://qualitysigndesigner.com/assets/img/buttons/start_designing_now_btn.png" );
	});
	
	$(".explainer-video-btn a img").on("mouseenter", function () {
	   $(this).attr( "src", "http://qualitysigndesigner.com/assets/img/buttons/explainer_video_btn_hover.png" );
	});
	$(".explainer-video-btn a img").on("mouseleave", function () {
	   $(this).attr( "src", "http://qualitysigndesigner.com/assets/img/buttons/explainer_video_btn.png" );
	});
	

	// Close Video Roll Over
	$("a.hide-video img").on("mouseenter", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/icons/close_icon.png" );
	});
	$("a.hide-video img").on("mouseleave", function () {
	   $(this).attr( "src", "http://www.qualitysigndesigner.com/assets/img/icons/close_icon_hover.png" );
	});
	
	
	// Remove Pipe on Catalog Page
	var pipe = $('.catalog_topbar_body').html().replace("|", " ");
	$('.catalog_topbar_body').html(pipe);	
	console.log(pipe);


	// Replace <br /> and > with >>
	$('.catalog_topbar_links br').replaceWith(" > ");
	
	// Catalog Nav
	//$("#catalog_menulinks_container_body1 ul li a.catalog_menulinks_subcategorylinks").parent().attr("style","background-image: url(http://qualitysigndesigner.com/assets/img/backgrounds/bullet_circle.png); background-repeat: no-repeat; background-position: 18px 6px; ");
	$("#catalog_menulinks_container_body1 ul li a.catalog_menulinks_subcategorylinks").attr("style","background-image: url(http://qualitysigndesigner.com/assets/img/backgrounds/bullet_circle.png); background-repeat: no-repeat; background-position: 18px 6px; padding-left:30px; ");


	if($("iframe").length == 0){
		console.log("There is no Iframe!");
	}
	





});


































