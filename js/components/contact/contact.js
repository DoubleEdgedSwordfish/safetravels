const form = document.querySelector(".contact__form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // Get the value from the inputs
  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = tel.value.trim();

  if (nameValue === "") {
    // Show error
    // Add error class
    setErrorFor(fullName, "Name cannot be blank");
  } else {
    // Add sucess class
    setSucessFor(fullName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSucessFor(email);
  }

  if (phoneValue !== "") {
    setSucessFor(tel);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".contact__error");

  // Add error message
  errorMessage.innerText = message;

  // Add error class
  formControl.className = "form__control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const textArea = document.querySelector(".contact__textarea");
const remainingChars = document.querySelector(".textarea__characters");
const maxChars = 200;

textArea.addEventListener("input", () => {
  // Check for the remaining characters 
  const remaining = maxChars - textArea.value.length;
  const color = remaining < maxChars * 0.1 ? "red" : "black";

  remainingChars.textContent = `${remaining} characters remaining`;
  remainingChars.style.color = color;

  if (remainingChars <= 0) {
    textArea.disabled = true;
  }
});
