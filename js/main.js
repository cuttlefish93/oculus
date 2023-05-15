'use strict';

const tabItems = document.querySelectorAll('.tabs__btn-item ');
const tabContents = document.querySelectorAll('.tabs__content-item');

tabItems.forEach(function (el) {
	el.addEventListener('click', open);
});

function open(evt) {
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;

	tabItems.forEach(function (item) {
		item.classList.remove('tabs__btn-item--active');
	});

	tabContents.forEach(function (item) {
		item.classList.remove('tabs__content-item--active');
	});

	tabTarget.classList.add('tabs__btn-item--active');

	document
		.querySelector(`#${button}`)
		.classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
});
