import * as components from "./components.js";
import { storeItemLocalStorage } from "./localStorage.js";
import { renderForm } from "./combineComponents.js";
import validate from "./validator.js";
import navigate from "./navigate.js";

export default function createAddItem(app) {
  const titleEl = components.getTitleEl("Добавить запись");
  const exitBtnEl = components.getBtnEl(
    "Выйти на склад",
    "exit-item-btn",
    "exit-item-btn"
  );
  const topWrapperEl = components.getTopWrapper();
  const formEl = renderForm();
  formEl.id = "#store-item-form"
  const validator = new validate(formEl);
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validator.isValid) {
      storeItemLocalStorage();
      navigate("Склад");
    }
  });

  exitBtnEl.addEventListener("click", function () {
    navigate("Склад");
  });

  topWrapperEl.append(titleEl, exitBtnEl);
  app.append(topWrapperEl, formEl);
}
