
const mob_menu = document.querySelector('.menu'); 
const close_item = document.querySelectorAll('.nav-item');

document.querySelector(".header-btn").addEventListener('touchstart', () => {
    mob_menu.classList.add('is-open');
});
document.querySelector(".menu-btn").addEventListener('touchstart', () => {
    mob_menu.classList.remove('is-open');
});

for (let i = 0; i < close_item.length; i++) {
    close_item[i].addEventListener('touchstart', () => { 
        mob_menu.classList.toggle('is-open');
    })
}


