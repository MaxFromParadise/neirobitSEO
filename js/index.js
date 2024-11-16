document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.nav__list');
	const menuClose = document.querySelector('.nav__close');

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});
	menuClose.addEventListener('click', () => {
		burger.classList.remove('active');
		menu.classList.remove('active');
	});
	const swiper = new Swiper('.portfolio__slider', {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 30,
		loop: false,
		navigation: {
			nextEl: '.portfolio__button--next',
			prevEl: '.portfolio__button--prev',
		},
		pagination: {
			el: '.portfolio__pagination',
			clickable: true,
		},
	});
});
