import * as components from "./components.js";
import * as localStorage from "./localStorage.js";
import { getFilterArr } from './dataChanging.js'
import navigate from "./navigate.js";

export function renderTable(array) {
  const tableEl = components.getTableEl();
  const tbodyEl = document.createElement("tbody");

  array.forEach((item) => {
    const trEl = document.createElement("tr");
    const tdEl = document.createElement("td");
    const deleteItemBtn = components.getBtnEl(
      "Удалить",
      "delete-item-btn",
      "delete-item-btn"
    );
    const editItemBtn = components.getBtnEl(
      "Редактировать",
      "edit-item-btn",
      "edit-item-btn"
    );

    trEl.innerHTML = `
            <td>${item.title}</td>
            <td>${item.place}</td>
            <td>${item.weight}</td>
            <td>${item.date}</td>    
        `;

    deleteItemBtn.addEventListener("click", function () {
      const items = localStorage.getLocalStorage();
      const filteredItems = items.filter((el) => el.title != item.title);
      localStorage.setLocalStorage(filteredItems);
      deleteItemBtn.parentNode.parentNode.remove();
    });

    editItemBtn.addEventListener("click", function () {
      navigate("Редактировать запись", item);
    });

    tdEl.append(deleteItemBtn, editItemBtn);
    trEl.append(tdEl);
    tbodyEl.append(trEl);
  });

  tableEl.append(tbodyEl);
  return tableEl;
}

export function renderForm(item) {
  console.log(item);
  const formEl = components.getFormEl("add-item-form", "add-item-form");

  const titleInputEl = components.getInputeEl("text", "Название", "title");
  const placeInputEl = components.getInputeEl("text", "Полка", "place");
  const weightInputEl = components.getInputeEl("text", "Вес (кг)", "weight");
  const dateInputEl = components.getInputeEl("date", "дд.мм.гггг", "date");
  const storeItemBtn = components.getBtnEl(
    "Добавить запись",
    "add-item-btn",
    "add-item-btn"
  );

  if (item) {
    titleInputEl.value = item.title;
    placeInputEl.value = item.place;
    weightInputEl.value = item.weight;
    dateInputEl.value = item.date;
  } else {
    titleInputEl.value = "";
    placeInputEl.value = "";
    weightInputEl.value = "";
    dateInputEl.value = "";
  }

  const inputsArr = [titleInputEl, placeInputEl, weightInputEl, dateInputEl];

  inputsArr.forEach((input) => {
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");
    inputWrapper.append(input);
    formEl.append(inputWrapper);
  });

  formEl.append(storeItemBtn);

  return formEl;
}

export function renderSearchForm() {
  const searchFormEl = components.getFormEl("search-form", "search-form");
  const titleSearchEl = components.getInputeEl(
    "text",
    "Поиск по названию",
    "title-search"
  );
  const placeSearchEl = components.getInputeEl(
    "text",
    "Поиск по полке",
    "place-search"
  );
  const weightSearchEl = components.getInputeEl(
    "text",
    "Поиск по весу",
    "weight-search"
  );
  const dateSearchEl = components.getInputeEl(
    "date",
    "Поиск по времени хранения",
    "date-search"
  );

  const searchInputsArray = [titleSearchEl, placeSearchEl, weightSearchEl, dateSearchEl]
  searchInputsArray.forEach(input => {
    input.addEventListener('input', function (e) {
        const tableEl = document.querySelector('#repository-table');
        const filteredTable = renderTable(getFilterArr())
        tableEl.replaceWith(filteredTable)
    });
  });


  searchFormEl.append(
    titleSearchEl,
    placeSearchEl,
    weightSearchEl,
    dateSearchEl
  );
  return searchFormEl;
}
