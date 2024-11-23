const listEl = document.querySelector('.list');
const btnDTU = document.querySelector('.sort-down-to-up');
const btnUTD = document.querySelector('.sort-up-to-down');
let numArr = [100, 500, 250, 750, 300];

const renderList = function(arr) {
    arr.forEach(element => {
        let listItemEl = document.createElement('li');
        listItemEl.textContent = element;
        listEl.append(listItemEl);
    })
}

btnDTU.onclick = function () {
    listEl.textContent = '';
    numArr.sort((a, b) => a - b);
    renderList(numArr);
}

btnUTD.onclick = function () {
    listEl.textContent = '';
    numArr.sort((a, b) => b - a);
    renderList(numArr);
}

renderList(numArr)
