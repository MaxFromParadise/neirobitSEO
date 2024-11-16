document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.nav__list');
	const menuClose = document.querySelector('.nav__close');
	const body = document.body;

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	});
	menuClose.addEventListener('click', () => {
		burger.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
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
