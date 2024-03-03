function profilefadeAnime(){
	$('.js-fadeup--profile').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeup');
		}
	});
}
$(window).on('load', function(){
	profilefadeAnime();
});

function workfadeAnime(){
	$('.js-fadeup--work').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeup');
		}
	});
}
$(window).scroll(function (){
	workfadeAnime();
});