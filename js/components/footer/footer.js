import "./footer.css";

const submitBtn = document.querySelector(".footer__submit");
const mailInput = document.querySelector(".footer__input");

submitBtn.addEventListener("click", (e) => {
  if (mailInput.value !== null && mailInput.value !== "") {
    e.preventDefault;
    alert(`An email has been sent to ${mailInput.value}`);
  } else if (mailInput.value == "") {
    alert("Please insert a valid email");
  }
});
