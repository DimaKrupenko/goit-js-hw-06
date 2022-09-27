const fontScale = document.querySelector("#font-size-control");

fontScale.addEventListener("click", onFontScale);

function onFontScale(event) {
  console.log(event);
  const span = document.querySelector("#text");
  span.style.fontSize = event.clientX + "px";
  console.log(event.clientX);
}
