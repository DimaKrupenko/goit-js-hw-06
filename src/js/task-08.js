const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmission);

function onFormSubmission(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const mail = formEl.email.value;
  const password = formEl.password.value;

  if (mail.length === 0 || password.length === 0) {
    alert("Все поля должны быть заполнены!");
  }

  const formData = { mail, password };
  console.log(formData);

  event.target.reset();
}
