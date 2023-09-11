const form = document.querySelector(".contact-form");
const customersName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSubmit = document.querySelector("#informationMessage");



function validateForm() {
  event.preventDefault();

  if (checkLength(customersName.value, 4)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 14)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 24)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (customersName.value < 5 || !validateEmail || subject.value < 15 || message.value < 25) {
    return;
    messageSubmit.innerHTML = "";
  } else {
    form.reset();
    messageSubmit.innerHTML =
      '<div class="information-message"><i class="fa-solid fa-check check"></i>Your message has been sent!</div>';
  }
}

form.addEventListener("submit", validateForm);




function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatche = regEx.test(email);
  return patternMatche;
}