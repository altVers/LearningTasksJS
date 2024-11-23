const cardEl = document.querySelector('.card');
const imageEl = document.querySelector('.card__image');
const textEl = document.querySelector('.card__text');
const btnEl = document.querySelector('.card__btn');

const giftArr = [
    {
      title: "Скидка 20% на первую покупку в нашем магазине!",
      icon: "img/discount.svg"
    },
    {
      title: "Скидка 10% на всё!",
      icon: "img/discount_2.svg"
    },
    {
      title: "Подарок при первой покупке в нашем магазине!",
      icon: "img/gift.svg"
    },
    {
      title: "Бесплатная доставка для вас!",
      icon: "img/delivery.svg"
    },
    {
      title: "Сегодня день больших скидок!",
      icon: "img/discount_3.svg"
    }
   ]


setTimeout(() => {
    let randomEl = giftArr[Math.floor(Math.random() * (giftArr.length - 1))]
    textEl.textContent = randomEl.title
    imageEl.setAttribute('src', randomEl.icon)
    cardEl.classList.add('card--active') 
}, 3000);

btnEl.addEventListener('click', function () {
    cardEl.classList.remove('card--active')
});

document.addEventListener('keydown', function(event) {
    if (cardEl.classList.contains('card--active') && event.key === 'Escape') { 
        cardEl.classList.remove('card--active')
    }
});
