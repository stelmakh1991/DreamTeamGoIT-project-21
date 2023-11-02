
const mob_menu = document.querySelector('.menu'); 

document.querySelector(".header-btn").addEventListener('touchstart', () => {
    mob_menu.classList.add('is-open');
});
document.querySelector(".menu-btn").addEventListener('touchstart', () => {
    mob_menu.classList.remove('is-open');
});