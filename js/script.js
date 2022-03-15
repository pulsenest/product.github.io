const hamburger = window.document.querySelector('.hamburger'),
    menu = window.document.querySelector('.header__wrapper-menu');
    //close = window.document.querySelector('.hamburger active');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});


