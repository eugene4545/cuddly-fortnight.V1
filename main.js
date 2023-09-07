const translate = document.querySelectorAll('.translate');
const title = document.querySelector('.chief-title');
const header = document.querySelector('header')
const shadow = document.querySelector('.shadow')
const main_home = document.querySelector('.main-home');


let header_height = header.offsetHeight;




window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`; 
    })
    title.style.opacity = -scroll/(header_height /2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

})

const navi = document.querySelector('.hamburger-menu');
const dynamic = document.querySelector('.dyna-nav');
const notification = document.querySelector('.notification');

navi.addEventListener('click', function() {
    navi.classList.toggle('is-active');
    dynamic.classList.toggle('is-active');
})

notification.addEventListener( 'on-click', function() {
    notification.classList.add('is-active');
})
