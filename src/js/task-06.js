const inputEl = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length='6']");

inputEl.addEventListener("blur", onInputaAmount);

function onInputaAmount(event) {
  if (event.currentTarget.value.length == inputLength.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");

    inputEl.classList.add("invalid");
  }
}
