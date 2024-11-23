const  inputEl = document.querySelector('.form__input');
const  btnEl = document.querySelector('.form__btn');
const textEl = document.querySelector('.form__success');

const promocodeArr = [
    {
      promocode: 'PROM10',
      gift: "Скидка 10%"
    },
    {
      promocode: 'PROM50',
      gift: "Скидка 50%"
    },
    {
      promocode: 'GIFT',
      gift: "Подарок в корзине"
    }
]
function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=')
        acc[name] = value
        return acc
    }, {})
}

const cookie = getCookie()

function checkPromo() {
    textEl.classList.remove('form__success--active')
    inputEl.classList.remove('form__input--active')
    promocodeArr.forEach(element => {
        if (inputEl.value == element.promocode) {
            textEl.textContent = `Промокод применен. ${element.gift}`
            textEl.classList.add('form__success--active')
            inputEl.classList.add('form__input--active')
            document.cookie = `promo=${element.promocode}`
        }
    });
}

if (!Object.keys(cookie)[0]) {
    inputEl.value = '' 
} else {
    inputEl.value = cookie.promo
    checkPromo()
}

btnEl.addEventListener('click', function (e) {
    e.preventDefault()
    checkPromo()
});
