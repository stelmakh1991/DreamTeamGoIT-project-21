const mob_menu = document.querySelector('.mob-menu');  // mob-menu - це div до якого додається і забирається класс is-open як в домашці руками писали

document.querySelector(".burger-btn-open").addEventListener('touchstart', () => {  // burger-btn-open - класс до бургер кнопки
    mob_menu.classList.add('is-open');
});
document.querySelector(".modal-btn-close").addEventListener('touchstart', () => {  // modal-btn-close - класс до кнопки закриття моб-меню 
    mob_menu.classList.remove('is-open');
});

