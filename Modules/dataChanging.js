import { getLocalStorage } from "./localStorage.js";

export function getSortArray(rule) {
  const items = getFilterArr();
  return sortArr(items, rule);
}

function sortArr(array, rule) {
  let sortedArr = array;
  switch (rule) {
    case "title":
      sortedArr = array.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      break;
    case "place":
      sortedArr = array.sort(function (a, b) {
        if (-a.place > -b.place) {
          return -1;
        }
        if (-a.place < -b.place) {
          return 1;
        }
        return 0;
      });
      break;
    case "weight":
      sortedArr = array.sort(function (a, b) {
        if (-a.weight > -b.weight) {
          return 1;
        }
        if (-a.weight < -b.weight) {
          return -1;
        }
        return 0;
      });
      break;
    case "date":
      sortedArr = array.sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
      break;
  }
  return sortedArr;
}

export function getFilterArr() {
    const itemsArray = getLocalStorage()
    const titleValue = document.querySelector('#title-search').value;
    const placeValue = document.querySelector('#place-search').value;
    const weightValue = document.querySelector('#weight-search').value;
    const dateValue = document.querySelector('#date-search').value;
    let filteredArray = itemsArray

    if(titleValue) {
      filteredArray = filteredArray.filter((item) => {
        return item.title.toLowerCase().startsWith(titleValue.toLowerCase())
      })
    }
  
    if (placeValue) {
      filteredArray = filteredArray.filter((item) => {
        return item.place.toLowerCase().startsWith(placeValue.toLowerCase())
      })
    }
    
    if (weightValue) {
      filteredArray = filteredArray.filter((item) => {
        return item.weight.toLowerCase().startsWith(weightValue.toLowerCase())
      })
    }

    if (dateValue) {
      filteredArray = filteredArray.filter((item) => {
        return item.date.toLowerCase().startsWith(dateValue.toLowerCase())
      })
    }
    return filteredArray
  }
