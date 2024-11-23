import Delivery from "./Delivery.js";
import {
  getTagEl,
  getWrapEl,
  getEditBtnEl,
  getInputEl,
  getSelectEl,
  getSaveBtnEl,
  getCloseBtnEl,
} from "./components.js";

export default class EditDelivery extends Delivery {
  constructor(title, adress, distance, status) {
    super(title, adress, distance, status);
  }

  getCardEl() {
    this.titleEl = document.createElement("h3");
    this.titleEl.classList.add("card__title");
    this.titleEl.textContent = this.title;

    this.adressEl = document.createElement("h3");
    this.adressEl.classList.add("card__title");
    this.adressEl.textContent = this.adress;

    this.distanceEl = document.createElement("h3");
    this.distanceEl.classList.add("card__title");
    this.distanceEl.textContent = `${this.distance} км.`;

    this.nameTagEl = getTagEl("Имя");
    this.adressTagEl = getTagEl("Адрес");
    this.distanceTagEl = getTagEl("Расстояние");

    this.editBtn = getEditBtnEl();
    this.editBtn.addEventListener("click", () => {
      const app = document.getElementById("app");
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      app.append(this.getEditCard());
      document.body.append(overlay);
    });

    this.cardWrapperEl = document.createElement("div");
    this.cardWrapperEl.classList.add(
      "card__wrapper",
      `card__wrapper--${this.status}`
    );

    this.cardWrapperEl.append(
      getWrapEl(this.titleEl, this.nameTagEl),
      getWrapEl(this.adressEl, this.adressTagEl),
      getWrapEl(this.distanceEl, this.distanceTagEl),
      this.editBtn
    );
    return this.cardWrapperEl;
  }

  getEditCard() {
    this.editWrapEl = document.createElement("div");
    this.editWrapEl.classList.add("edit-card__wrapper");

    this.saveBtnEl = getSaveBtnEl();
    this.saveBtnEl.addEventListener("click", () => {
      const titleValue = document.getElementById("titleEdit").value;
      const adressValue = document.getElementById("adressEdit").value;
      const distanceValue = document.getElementById("distanceEdit").value;
      const statusValue = document.querySelector(".edit-card__select").value;

      this.title = titleValue;
      this.adress = adressValue;
      this.distance = distanceValue;
      this.distanceEl.textContent = `${distanceValue} км.`;

      switch (statusValue) {
        case "Доставлен":
          this.status = "delivered";
          this.cardWrapperEl.className = "";
          this.cardWrapperEl.classList.add(
            "card__wrapper",
            `card__wrapper--delivered`
          );
          break;
        case "Доставляется":
          this.status = "delivery";
          this.cardWrapperEl.className = "";
          this.cardWrapperEl.classList.add(
            "card__wrapper",
            `card__wrapper--delivery`
          );
          break;
        default:
          this.status = "canceled";
          this.cardWrapperEl.className = "";
          this.cardWrapperEl.classList.add(
            "card__wrapper",
            `card__wrapper--canceled`
          );
          break;
      }

      const overlay = document.querySelector(".overlay");
      overlay.remove();
      const editCard = document.querySelector(".edit-card__wrapper");
      editCard.remove();
    });

    this.closeBtnEl = getCloseBtnEl();
    this.closeBtnEl.addEventListener("click", function () {
      const overlay = document.querySelector(".overlay");
      overlay.remove();
      const editCard = document.querySelector(".edit-card__wrapper");
      editCard.remove();
    });

    this.titleEditEl = document.createElement("h2");
    this.titleEditEl.textContent = "Изменить";
    this.titleEditEl.classList.add("card-edit__title");

    this.titleInput = getInputEl("text", "titleEdit");
    this.titleInput.value = this.title;
    this.adressInput = getInputEl("text", "adressEdit");
    this.adressInput.value = this.adress;
    this.distanceInput = getInputEl("number", "distanceEdit");
    this.distanceInput.value = this.distance;
    this.statusSelect = getSelectEl(this.status);

    this.editWrapEl.append(
      this.titleEditEl,
      this.titleInput,
      this.adressInput,
      this.distanceInput,
      this.statusSelect,
      this.saveBtnEl,
      this.closeBtnEl
    );
    return this.editWrapEl;
  }

  static getTotalDistance(deliveryArr) {
    let counter = 0
    deliveryArr.forEach(element => {
        if (element.status != "canceled") {
            counter = counter + +element.distance
        }
    });
    return counter
  }

  set title(value) {
    this._title = value;

    if (this.titleEl) {
      this.titleEl.textContent = this.title;
    }
  }

  get title() {
    return this._title;
  }
}
