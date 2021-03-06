var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
    speed: 1000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});