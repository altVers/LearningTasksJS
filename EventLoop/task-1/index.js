const appEl = document.querySelector("#app");
const getRandom = () => Math.floor(Math.random() * (6 - 2) + 2) * 1000;

const getImage = (src) => {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", src);
  return imgEl;
};

const catsArr = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg"];
const dogsArr = ["img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg"];

window.onload = () => {
  setTimeout(function () {
    Promise.resolve(catsArr).then(function (value) {
      const imgWrapperEl = document.createElement("div");
      value.forEach((element) => {
        imgWrapperEl.append(getImage(element));
      });
      appEl.append(imgWrapperEl);
    });
  }, getRandom());

  setTimeout(function () {
    Promise.resolve(dogsArr).then(function (value) {
      const imgWrapperEl = document.createElement("div");
      value.forEach((element) => {
        imgWrapperEl.append(getImage(element));
      });
      appEl.append(imgWrapperEl);
    });
  }, getRandom());
};
