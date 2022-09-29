function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector("span");

button.addEventListener("click", onButton);

function onButton(event) {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
