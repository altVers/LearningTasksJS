const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const radioInputs = document.querySelectorAll('.form__radio');
const rangeInputs = document.querySelector('.form__range');
const checkboxInputs = document.querySelectorAll('.form__checkbox');
const texareaInput = document.querySelector('.form__textarea');
const submitBtn = document.querySelector('.form__btn');
const nameInputBlocker = document.querySelector('.form__alert-required--name');
const emailInputBlocker = document.querySelector('.form__alert-required--email');
const emailIvalidInputBlocker = document.querySelector('.form__alert-invalid--email');
const resultsEl = document.querySelector('.results');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (validate()) {
        renderForm()
    }
});

nameInput.addEventListener('focus', function () {
    nameInput.style.backgroundColor = 'white'
    nameInputBlocker.classList.remove('active')
})

emailInput.addEventListener('focus', function () {
    emailInput.style.backgroundColor = 'white'
    emailInputBlocker.classList.remove('active')
    emailIvalidInputBlocker.classList.remove('active')
})

function radioCheckValue(arr) {
    let radioValue = '';
    arr.forEach(radio => {
        if (radio.checked) {
            radioValue = radio.value
        }
    });
    return radioValue
}

function checkboxCheckValue(arr) {
    let checkboxInputsArr = [];
    arr.forEach(el => {
        if (el.checked) {
            checkboxInputsArr.push(el.value)
        }
    });
    return checkboxInputsArr.join(', ')
}

function renderForm() {
    resultsEl.textContent = '';
    resultsEl.innerHTML = `<h2>Результаты опроса</h2>
                                <ul class="result__list">
                                <li class="result__item">Имя пользователя: ${nameInput.value}</li>
                                <li class="result__item">Email: ${emailInput.value}</li>
                                <li class="result__item">Пол: ${radioCheckValue(radioInputs)}</li>
                                <li class="result__item">Оценка сервиса: ${rangeInputs.value}</li>
                                <li class="result__item">Интересы пользователя: ${checkboxCheckValue(checkboxInputs)}</li>
                                <li class="result__item">Дополнительный комментарий: ${texareaInput.value}</li> 
                            </ul>`
    form.append(resultsEl)
}

function validate() {
    isValid = true
    if(nameInput.value == '') {
        nameInput.style.backgroundColor = '#FBABAB'
        nameInputBlocker.classList.add('active')
        isValid = false
    } 
    if (emailInput.value == '') {
        emailInput.style.backgroundColor = '#FBABAB'
        emailInputBlocker.classList.add('active')
        isValid = false
    }
    if (emailInput.value != '' && !emailInput.value.includes('@')) {
        emailInput.style.backgroundColor = '#FBABAB'
        emailIvalidInputBlocker.classList.add('active')
        isValid = false
    }
    return isValid
}