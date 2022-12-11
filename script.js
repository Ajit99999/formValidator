const formElem = document.querySelector(".form-container");
const passwordElem = document.querySelector("#password");
const confimPasswordElem = document.querySelector("#confirm-password");
let isValid = false;
let passwordValid = false;

function validateForm() {
  isValid = formElem.checkValidity();

  if (passwordElem.value === confimPasswordElem.value) {
    passwordValid = true;
  }
}

function storeFormData() {
  const formData = {
    name: formElem.name.value,
    email: formElem.email.value,
    password: formElem.email.value,
    phone: formElem.phone.value,
  };
}
function formSubmitHandler(e) {
  e.preventDefault();
  validateForm();
  if (isValid && passwordValid) {
    storeFormData();
    formElem.reset();
    isValid = false;
    passwordValid = false;
  } else {
    return;
  }
}

formElem.addEventListener("submit", formSubmitHandler);
