jQuery(document).ready(function(){
         /* I'm using the "container" class. You could use any class or ID*/
        $(".projects li a img").hover(
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
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
});

$(document).ready(function() {
  $('div.logo').hover(function() {
    $('div.overlay').fadeIn();
  }, function() {
    $('div.overlay').fadeOut();
  });
});