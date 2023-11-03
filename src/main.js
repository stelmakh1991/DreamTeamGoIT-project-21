
const mob_menu = document.querySelector('.menu'); 
const close_item = document.querySelectorAll('.nav-link');
const mob_backdrop = document.querySelector('.backdrop'); 


document.querySelector(".header-btn").addEventListener('touchstart', () => {
    mob_menu.classList.add('is-open');
});
document.querySelector(".menu-btn").addEventListener('touchstart', () => {
    mob_menu.classList.remove('is-open');
});

for (let i = 0; i < close_item.length; i++) {
    if(close_item[i]){
        close_item[i].addEventListener('touchstart', () => { 
        let anchorId = close_item[i].getAttribute('href')
            console.log(anchorId);
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        mob_menu.classList.remove('is-open');
        mob_backdrop.classList.remove('is-open');
    })
        }
}



document.querySelector(".header-btn").addEventListener('touchstart', () => {
    mob_backdrop.classList.add('is-open');
});
document.querySelector(".menu-btn").addEventListener('touchstart', () => {
    mob_backdrop.classList.remove('is-open');
});
