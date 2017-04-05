$(document).ready(function(){

	$('.icon-menu').on('click', function(){
		$('.main-nav-ul').addClass('active2');
		$('.icon-cancel-squared').addClass('active');
		$('.icon-menu').removeClass('active');
	});

	$('.icon-cancel-squared').on('click', function(){
		$('.main-nav-ul').removeClass('active2');
		$('.icon-cancel-squared').removeClass('active');
		$('.icon-menu').addClass('active');
	});

	$('.slider-wrapper').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots:true,
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: true,
				autoplaySpeed: 1500
			}
		}
		]
	});

	$('.second-slider-wrapper').slick({
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots:true,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 1500
			}
		}
		]
	});

	$('.slider-sec5').slick({
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots:true,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 1500
			}
		}
		]
	});
});