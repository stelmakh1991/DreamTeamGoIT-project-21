
const mob_menu = document.querySelector('.menu'); 

document.querySelector(".header-btn").addEventListener('touchstart', () => {
    mob_menu.classList.add('is-open');
});
document.querySelector(".menu-btn").addEventListener('touchstart', () => {
    mob_menu.classList.remove('is-open');
});
const mob_backdrop = document.querySelector('.backdrop'); 
document.querySelector(".header-btn").addEventListener('touchstart', () => {
    mob_backdrop.classList.add('is-open');
});
document.querySelector(".menu-btn").addEventListener('touchstart', () => {
    mob_backdrop.classList.remove('is-open');
});