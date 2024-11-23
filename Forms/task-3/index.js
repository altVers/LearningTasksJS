const nameInput = document.querySelector('.form__input');
const cardName = document.querySelector('.card__holder');
const colorSelect = document.querySelector('.form__select');
const cardView = document.querySelector('.card');

nameInput.addEventListener('input', function (e) {
    
    cardName.textContent = nameInput.value
});

nameInput.addEventListener('focus', function (e) {
    nameInput.style.backgroundColor = '#CECECE'
});

nameInput.addEventListener('blur', function (e) {   
    if(nameInput.value == '') {
        cardName.textContent = 'card holder' 
    }
    nameInput.style.backgroundColor = 'transparent'
});

colorSelect.addEventListener('change', function () {
    cardView.style.backgroundColor = colorSelect.value
});

