export function getWrapEl(title, tag) {
  const cardWrapEl = document.createElement("div");
  cardWrapEl.classList.add("card__info-wrapper");
  const tagEl = tag;
  const titleEl = title;

  cardWrapEl.append(tagEl, titleEl);
  return cardWrapEl;
}

export function getTagEl(tag) {
  const tagEl = document.createElement("span");
  tagEl.classList.add("card__tag");
  tagEl.textContent = tag;

  return tagEl;
}

export function getEditBtnEl() {
  const btnEl = document.createElement("button");
  btnEl.classList.add("card__edit-btn");
  btnEl.innerHTML =
    '<svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
  return btnEl;
}

export function getCloseBtnEl() {
  const btnEl = document.createElement("button");
  btnEl.classList.add("card-edit__close-btn");
  btnEl.innerHTML =
    '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/><path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/></svg>';
  return btnEl;
}

export function getInputEl(type, id) {
  const inputEl = document.createElement("input");
  inputEl.type = type;
  inputEl.id = id
  inputEl.classList.add("edit-card__input");
  return inputEl;
}

export function getSelectEl(status) {
  const statusArr = ["Доставлен", "Доставляется", "Отменен"];
  let statusValue = "";
  switch (status) {
    case "delivered":
      statusValue = "Доставлен";
      break;
    case "delivery":
      statusValue = "Доставляется";
      break;
    default:
      statusValue = "Отменен";
      break;
  }
  const selectEl = document.createElement("select");
  selectEl.classList.add("edit-card__select");

  statusArr.forEach((element) => {
    const optionEl = document.createElement("option");
    optionEl.textContent = element;

    if (element == statusValue) {
      optionEl.selected = true;
    }
    selectEl.append(optionEl);
  });

  return selectEl;
}

export function getSaveBtnEl() {
  const saveBtnEl = document.createElement("button");
  saveBtnEl.classList.add("edit-card__save-btn");
  saveBtnEl.textContent = "Сохранить";

  return saveBtnEl;
}
