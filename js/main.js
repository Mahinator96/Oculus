'use strict'

// Работа с табами
const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

// Ф-ия показа слайда
const open = (e) => {
	const tabTarget = e.currentTarget;
	const buttonID = document.querySelector(`#${tabTarget.dataset.button}`);

	// Убрать активный класс у всех табов
	tabItems.forEach(function(item) {
		item.classList.remove('tabs__btn-item--active');
	})
	// Спрятать все слайды
	tabContents.forEach(function(item) {
		item.classList.remove('tabs__content-item--active');
	})
	// Добавить табу активный класс
	tabTarget.classList.add('tabs__btn-item--active');
	// Показать слайд
	buttonID.classList.add('tabs__content-item--active');
}

// Каждому табу повесить обработчик 'click'
tabItems.forEach(function(tabItem) {
	tabItem.addEventListener('click', open);
});