$(function(){
	"use strict";
	var topoffset = 50;
	$("body").scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});

	var hash = $(this).find('li.active a').attr('href');
	if(hash !== "#featured")
	{
		$('header nav').addClass('inbody');
	}
	else
	{
		$('header nav').removeClass('inbody');
	}

	// Add inbody class when scrospy is activated
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
		var hash = $(this).find('li.active a').attr('href');
		if(hash !== '#featured')
		{
			$('header nav').addClass('inbody');
		}
		else
		{
			$('header nav').removeClass('inbody');
		}
	});

	$('#scroll-down-arrow').click(function() {
        $('html,body').animate({
                scrollTop: $('#about').offset().top-topoffset+2
            }, 500);
            return false;
	});

	    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') ===
            this.pathname.replace(/^\//,'') &&
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-topoffset+2
                }, 500);
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling

    function loop() {
	    $('#scroll-down-arrow').animate({'bottom': '30'}, {
	        duration: 500, 
	        complete: function() {
	            $('#scroll-down-arrow').animate({bottom: 0}, {
	                duration: 500, 
	                complete: loop});
	        }});
	}
	loop();

	$('.filtr-container').filterizr();

	$(window).on('resize', function () {
		var windowWidth = $(this).width();
		if(windowWidth > 1200)
		{
		    var image_h = $("#about-img").height();

	        $('.about-text').height(image_h + "px");
    	}
	});


	$("#about-img").one("load", function() {
	  	var image_h = $("#about-img").height();
	    $('.about-text').height(image_h + "px");
	}).each(function() {
	  if(this.complete) $(this).load();
	});

	$(".nutrition-bar-category").on("click", function(){
		if(!$(this).hasClass("active-bar-category")) {
			$(".nutrition-bar-category").removeClass("active-bar-category");
			$(this).addClass("active-bar-category");
		}
	});

});