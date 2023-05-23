"use strict"
document.addEventListener('DOMContentLoaded', () => {
	// инициализация слайдера
	new ItcSimpleSlider('.slider', {
		loop: true,
		autoplay: false,
		interval: 5000,
		swipe: true,
	});
});