const formEl = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const weightInput = document.querySelector('#weight');
const distanceInput = document.querySelector('#distance');
const submitBtn = document.querySelector('.form__btn');
const tableBody = document.querySelector('.table__body');
const nameReauiredBlocker = document.querySelector('.form__blocker-required--name');
const weightReauiredBlocker = document.querySelector('.form__blocker-required--weight');
const distanceReauiredBlocker = document.querySelector('.form__blocker-required--distance');
const invalidValueBlocker = document.querySelector('.form__blocker-invalid-input');

submitBtn.addEventListener('click', function (e) {
    if (validate()) {
        renderForm()
    }
});

formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    e.target.reset()
});

nameInput.addEventListener('focus', function () {
    nameInput.style.backgroundColor = 'white'
    nameReauiredBlocker.classList.remove('active')
})

weightInput.addEventListener('focus', function () {
    weightInput.style.backgroundColor = 'white'
    weightReauiredBlocker.classList.remove('active')
    invalidValueBlocker.classList.remove('active')
})

distanceInput.addEventListener('focus', function () {
    distanceInput.style.backgroundColor = 'white'
    distanceReauiredBlocker.classList.remove('active')
    invalidValueBlocker.classList.remove('active')
})

function validate() {
    isValid = true
    if (nameInput.value == '') {
        nameInput.style.backgroundColor = '#FBABAB'
        nameReauiredBlocker.classList.add('active')
        isValid = false
    }
    if (weightInput.value == '') {
        weightInput.style.backgroundColor = '#FBABAB'
        weightReauiredBlocker.classList.add('active')
        isValid = false
    }
    if (distanceInput.value == '') {
        distanceInput.style.backgroundColor = '#FBABAB'
        distanceReauiredBlocker.classList.add('active')
        isValid = false
    }
    if (weightInput.value != '' && weightInput.value <= 0 ||
        distanceInput.value != '' && distanceInput.value <= 0) {
            invalidValueBlocker.classList.add('active')
            isValid = false
    }
    return isValid
}

const calcCost = (weight, dist) => `${(weight * dist) / 10} руб.`

function renderForm() {
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${nameInput.value}</td>
    <td>${weightInput.value}</td>
    <td>${distanceInput.value}</td>
    <td>${calcCost(weightInput.value, distanceInput.value)}</td>`
    tableBody.append(tableRow)
}