function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;
let btnValuDif;

dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStartRef.toggleAttribute('disabled');
}

// Function stop event listener
function onStop() {
  clearInterval(timerId);

  dataStartRef.removeAttribute('disabled');
}

// Function set random bg color
function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}
