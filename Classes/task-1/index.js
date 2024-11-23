import Delivery from "./Delivery.js";
const app = document.getElementById("app");

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11),
];

deliveryArr.forEach((element) => {
  app.append(element.getCardEl());
});


