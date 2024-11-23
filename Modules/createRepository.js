import * as components from "./components.js";
import { renderTable, renderSearchForm } from "./combineComponents.js";
import * as localStorage from "./localStorage.js";
import navigate from "./navigate.js";

export default function createRepository(app) {
  const titleEl = components.getTitleEl("Склад");
  const addItemBtn = components.getBtnEl(
    "Добавить запись",
    "add-item-btn",
    "add-item-btn"
  );
  const topWrapperEl = components.getTopWrapper();
  const itemsArray = localStorage.getLocalStorage();
  const tableEl = renderTable(itemsArray);
  const searchForm = renderSearchForm()

  topWrapperEl.append(titleEl, addItemBtn);
  addItemBtn.addEventListener("click", function () {
    navigate("Добавить запись");
  });

  app.append(
    topWrapperEl,
     searchForm,
    tableEl
  );
}
