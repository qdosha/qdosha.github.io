let formTitel = document.querySelector('.form__titel');
let form = document.querySelector('.form');

formTitel.addEventListener('click', function () {
    form.classList.toggle('form--active');
})

let menu = document.querySelector('.nav_mobile');
let menuBody = document.querySelector('.menu_mobile');
let menuClose = document.querySelector('.menu__close');

menu.addEventListener('click', function () {
    menuBody.classList.toggle('menu_mobile--active');
})

menuClose.addEventListener('click', function () {
    menuBody.classList.toggle('menu_mobile--active');
})
