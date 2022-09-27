const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const nameEl = document.querySelector("#name-output");
  nameEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value.length === 0) {
    nameEl.textContent = "Anonymous";
  }
}
