import Delivery from "./Delivery.js";
import EditDelivery from "./EditDelivery.js";
const app = document.getElementById("app");

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
  new EditDelivery("Алексей", "ул. Роста, д. 17", 10, "delivered"),
  new EditDelivery("Витя", "ул. Роста, д. 14", 5, "canceled"),
  new EditDelivery("Рома", "ул. Права, д. 24", 23, "delivered"),
];

const countWrap = document.createElement("div");
countWrap.classList.add("count__wrapper");
const countBtnEl = document.createElement("button");
countBtnEl.classList.add("count__btn");
countBtnEl.textContent = "Рассчитать общее расстояние";
const countTextEl = document.createElement("span");
countTextEl.classList.add("count__text");

countBtnEl.addEventListener("click", function () {
  countTextEl.textContent = `Общее расстояние завершенных и активных заявок: ${EditDelivery.getTotalDistance(
    deliveryArr
  )} км.`;
});

deliveryArr.forEach((element) => {
  app.append(element.getCardEl());
});


countWrap.append(countBtnEl, countTextEl)
document.querySelector('main').append(countWrap);


