const progressBarEl = document.querySelector('#progress-bar')
const getRandom = () => Math.floor(Math.random() * (10 - 2) + 2);

function getProgressTime(time) {
  const spanEl = document.querySelector('#progress-time');
  let counter = 0
  const interval = setInterval(function() {
    spanEl.textContent = `${++counter}с`
  }, 1000);

  setTimeout(function() {
    clearInterval(interval)
  }, time * 1000);
}

function progress(time) {
  progressBarEl.style.transition = `all ease-in-out ${time}s`
  progressBarEl.style.width = `500px`
  getProgressTime(time)
}

window.onload = () => {
  progress(getRandom())
}