let formTitel = document.querySelector('.form__titel');
let form = document.querySelector('.form');

formTitel.addEventListener('click', function() {
    form.classList.toggle('form--active');
})