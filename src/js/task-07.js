const fontScale = document.querySelector("#font-size-control");

fontScale.addEventListener("input", onFontScale);

function onFontScale(event) {
  console.log(event.target.valueAsNumber);
  const span = document.querySelector("#text");
  span.style.fontSize = event.target.valueAsNumber + "px";
}
