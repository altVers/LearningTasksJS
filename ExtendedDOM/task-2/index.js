const listEl = document.querySelector('.list');
const addBtn = document.querySelector('.add-el');
const removeBtn = document.querySelector('.remove-el');

addBtn.onclick = function () {
    let listItemEl = document.createElement('li');
    listItemEl.textContent = 'Новый элемент списка'
    listEl.append(listItemEl)
}

removeBtn.onclick = function () {
    listEl.lastElementChild.remove()
}