"use strict";

// (function($){
// 	$(window).on("load",function(){
// 		$(".content").mCustomScrollbar();
// 	});
// })(jQuery);

$(document).ready(function(){
	$(".burger").click(function(){
		$(".side-menu").toggleClass("show");
	});

	$(".side-header .bt-more").click(function(){
		$(".header").toggleClass("show");
	});

	if(window.innerWidth < 1025){
        $('.has-dropdown').click(function(d){
            d.preventDefault();
            $(this).children(".drop-ct").toggle();
        });
    }
	/*let game_iframe = $('iframe#game-area');
	if(game_iframe.length){
		//is game page
		game_iframe.attr('src', game_iframe.attr('data-src'));
	}*/
});

function open_fullscreen() {
	let game = document.getElementById("game-area");
	if (game.requestFullscreen) {
	  game.requestFullscreen();
	} else if (game.mozRequestFullScreen) { /* Firefox */
	  game.mozRequestFullScreen();
	} else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	  game.webkitRequestFullscreen();
	} else if (game.msRequestFullscreen) { /* IE/Edge */
	  game.msRequestFullscreen();
	}
};