import * as components from "./components.js";
import { editItemLocalStorage } from "./localStorage.js";
import { renderForm } from "./combineComponents.js";
import validate from "./validator.js";
import navigate from "./navigate.js";

export default function renderEditItem(app, item) {
  const titleEl = components.getTitleEl("Редактировать запись");
  const exitBtnEl = components.getBtnEl(
    "Выйти на склад",
    "exit-item-btn",
    "exit-item-btn"
  );
  const topWrapperEl = components.getTopWrapper();
  const formEl = renderForm(item);
  const validator = new validate(formEl);
  
  formEl.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validator.isValid) {
          editItemLocalStorage(item);
          navigate("Склад");
        }
    });
    
    exitBtnEl.addEventListener("click", function () {
        navigate("Склад");
    });
    
  topWrapperEl.append(titleEl, exitBtnEl);
  app.append(topWrapperEl, formEl);

  const editBtn = document.querySelector('#add-item-btn');
  editBtn.textContent= 'Редактировать запись'
}
