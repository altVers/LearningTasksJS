export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("items")) || [];

export const setLocalStorage = (newArr) =>
  localStorage.setItem("items", JSON.stringify(newArr));

export function storeItemLocalStorage() {
  const items = getLocalStorage();
  const title = document.querySelector("#title").value;
  const place = document.querySelector("#place").value;
  const weight = document.querySelector("#weight").value;
  const date = document.querySelector("#date").value;

  const item = {
    title,
    place,
    weight,
    date,
  };

  items.push(item);

  setLocalStorage(items);
}

export function editItemLocalStorage(item) {
  const items = getLocalStorage();
  const title = document.querySelector("#title").value;
  const place = document.querySelector("#place").value;
  const weight = document.querySelector("#weight").value;
  const date = document.querySelector("#date").value;

  const editedItem = {
    title,
    place,
    weight,
    date,
  };

  items.forEach((element) => {
    if (JSON.stringify(element) === JSON.stringify(item)) {
      Object.assign(element, editedItem);
    }
  });

  setLocalStorage(items);
}
