document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.nav__list');

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});
});
