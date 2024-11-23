import { getTagEl, getWrapEl } from "./components.js";

export default class Delivery {
  _title = "";
  _adress = "";
  _distance = "";
  _status = "";

  constructor(title, adress, distance, status) {
    this.title = title;
    this.adress = adress;
    this.distance = distance;
    this.status = status;
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

    this.cardWrapperEl = document.createElement("div");
    this.cardWrapperEl.classList.add('card__wrapper', `card__wrapper--${this.status}`);

    this.cardWrapperEl.append(
      getWrapEl(this.titleEl, this.nameTagEl),
      getWrapEl(this.adressEl, this.adressTagEl),
      getWrapEl(this.distanceEl, this.distanceTagEl)
    );

    return this.cardWrapperEl;
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

  set adress(value) {
    this._adress = value;

    if (this.adressEl) {
      this.adressEl.textContent = this.adress;
    }
  }

  get adress() {
    return this._adress;
  }

  set distance(value) {
    this._distance = value;

    if (this.adressEl) {
      this.distanceEl.textContent = this.distance;
    }
  }

  get distance() {
    return this._distance;
  }

  set status(value) {
    this._status = value;
  }

  get status() {
    return this._status;
  }
}
