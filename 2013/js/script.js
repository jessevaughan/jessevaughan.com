/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");

jQuery(document).ready(function(){
         /* I'm using the "container" class. You could use any class or ID*/
        $(".sample a img").hover(
            function() {
                $(this).stop().animate({"opacity": "1"}, "slow");
            },
            function() {
                $(this).stop().animate({"opacity": "0.5"}, "slow");
            });      
    });
    
jQuery(document).ready(function(){
         /* I'm using the "container" class. You could use any class or ID*/
        $(".rss-box-instagram img").hover(
            function() {
                $(this).stop().animate({"opacity": "1"}, "slow");
            },
            function() {
                $(this).stop().animate({"opacity": "0.5"}, "slow");
            });      
    });

jQuery(document).ready(function(){
         /* I'm using the "container" class. You could use any class or ID*/
        $(".contact-icons img").hover(
            function() {
                $(this).stop().animate({"opacity": "1"}, "slow");
            },
            function() {
                $(this).stop().animate({"opacity": "0.5"}, "slow");
            });      
    });

jQuery(document).ready(function($) {
 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 100}, 3500);
	});
});

$(document).ready(function() {
  $('div.logo').hover(function() {
    $('div.overlay').fadeIn();
  }, function() {
    $('div.overlay').fadeOut();
  });
});

$(document).ready(function() {
  $('a.contactlink').hover(function() {
    $('div.overlay').fadeIn();
  }, function() {
    $('div.overlay').fadeOut();
  });
});