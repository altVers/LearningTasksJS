const appEl = document.querySelector("#app");
const getRandom = () => Math.floor(Math.random() * (6 - 2) + 2);
const timerFirst = getRandom();
const timerSecond = getRandom();

const getImage = (src) => {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", src);
  return imgEl;
};

const dogsArr = ["img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg"];
const catsArr = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg"];

function renderProgressTime(time, timerId) {
  const progressTimeEl = document.createElement("span");
  progressTimeEl.id = timerId;
  progressTimeEl.textContent = "0с";
  appEl.append(progressTimeEl);
  timerLogic(timerId, time);
}

function timerLogic(progressTimeId, time) {
  let counter = 0;
  const timer = document.getElementById(progressTimeId);
  const interval = setInterval(function () {
    timer.textContent = `${++counter}с`;
  }, 1000);

  setTimeout(function () {
    clearInterval(interval);
  }, time * 1000);
}

function renderProgressBar(time, barId) {
  const progressBarEl = document.createElement("div");
  progressBarEl.id = barId;
  progressBarEl.style.transform = 'scaleX(0)';

  setTimeout(function () {
    progressBarEl.style.transform = 'scaleX(1)';
    progressBarEl.style.transition = `all ${time}s linear`;
  });
  
  appEl.append(progressBarEl);
}

function renderImages(array) {
    const imgWrapperEl = document.createElement("div");
    array.forEach((element) => {
      imgWrapperEl.append(getImage(element));
    });
    appEl.append(imgWrapperEl);
}

window.onload = () => {
  
 const promis1 = Promise.resolve(getRandom()).then((timer) => {
  renderProgressBar(timer, 'barcat')
  renderProgressTime(timer, 'timercat')

  setTimeout(function() {
    renderImages(catsArr)

    const promise2 = Promise.resolve(getRandom()).then((timer2) => {
      renderProgressBar(timer2, 'bardog')
      renderProgressTime(timer2, 'timerdog')

      setTimeout(function() {
        renderImages(dogsArr)
      }, timer2 * 1000);
    })

  }, timer * 1000);
 })
};