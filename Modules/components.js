import { renderTable } from "./combineComponents.js";
import { getSortArray } from "./dataChanging.js";

//Функция для получения заголовка
export function getTitleEl(title) {
  const titleEl = document.createElement("h1");
  titleEl.classList.add("title");
  titleEl.textContent = title;
  return titleEl;
}

//Функция для получения кнопки
export function getBtnEl(text, className, id) {
  const btnEl = document.createElement("button");
  btnEl.classList.add(className);
  btnEl.textContent = text;
  btnEl.id = id;
  return btnEl;
}

//Функция для получения обертки для тайтла и кнопок
export function getTopWrapper() {
  const topWrapperEl = document.createElement("div");
  topWrapperEl.classList.add("top-wrapper");
  topWrapperEl.id = "top-wrapper";
  return topWrapperEl;
}

//Функция для получения заголовка колонки и ее обработчик
function getThEl(text, id) {
  const thEl = document.createElement("th");
  thEl.textContent = text;
  thEl.id = id;

  thEl.addEventListener('click', function () {
    const tableEl = document.querySelector('#repository-table');
    const sortedTable = renderTable(getSortArray(id))
    tableEl.replaceWith(sortedTable)
  });

  return thEl;
}

//Функция для получения инпута
export function getInputeEl(type, placeholder, id) {
  const inputEl = document.createElement("input");
  inputEl.type = type;
  inputEl.placeholder = placeholder;
  inputEl.id = id;
  return inputEl;
}

//Функция для получения формы
export function getFormEl(id, className) {
  const formEl = document.createElement("form");
  formEl.id = id;
  formEl.classList.add(className)
  return formEl;
}

//Функция для получения таблицы без tbody
export function getTableEl() {
  const tableEl = document.createElement("table");
  tableEl.id = 'repository-table'
  const theadEl = document.createElement("thead");
  const thTitleEl = getThEl("Название", "title");
  const thPlaceEl = getThEl("Полка", "place");
  const thWeightEl = getThEl("Вес", "weight");
  const thDateEl = getThEl("Время хранения", "date");
  const thEmptyEl = getThEl("", "empty");

  theadEl.append(thTitleEl, thPlaceEl, thWeightEl, thDateEl, thEmptyEl);
  tableEl.append(theadEl);

  return tableEl;
}

export function getLoader() {
  const loaderWrapper = document.createElement('div');
  loaderWrapper.classList.add('loader')
  return loaderWrapper
}
