$(function() {
	$(window).load(function(){
		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	 
		$('.portfolioFilter a').click(function(){
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 
	});

	function openModal(){
		alert('hi');
	}

	/*Modal*/
	$('.openModal').on('click', function(e){
		e.preventDefault();
		var currentModal = $(this).attr("href");
		$(currentModal + ", .overlay").fadeIn(500);
		$('body').addClass('openedModal');
	});

	$('.overlay').on('click', function(e) {
		e.preventDefault();
		$('.modal, .overlay').fadeOut(100);
		$('body').removeClass('openedModal');
	});
	
	/*Slick*/
	$('.slideDiv').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	
	/*Mask*/
	$(document).ready(function() {
		$('input[name="phone"]').mask('+38 0(99) 999-99-99');
		$('button').on('click', function(event) {
			event.preventDefault();
		});
	});

});
