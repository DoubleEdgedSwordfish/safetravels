import "./footer.css";

const submitBtn = document.querySelector(".footer__submit");
const mailInput = document.querySelector(".footer__input");
const emailPopupMessage = document.querySelector('.popup__description');

submitBtn.addEventListener("click", (e) => {
  if (mailInput.value !== null && mailInput.value !== "") {
    e.preventDefault();
    emailPopup.style.display = "flex"
    emailPopupMessage.textContent = `An email has been sent to ${mailInput.value}`
    mailInput.value = ""
  } else if (mailInput.value == "") {
    alert("Please insert a valid email");
  }
});

const closeBtn = document.querySelector('.popup__close');
const emailPopup = document.querySelector('.footer__popup');
closeBtn.addEventListener('click', () => {
  // Close popup
  emailPopup.style.display = "none";
})