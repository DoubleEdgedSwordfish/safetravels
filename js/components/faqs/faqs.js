import "./faqs.css";

const downArrow = document.querySelector(".accordion__down");

downArrow.addEventListener("click", () => {
  if (!downArrow.classList.contains("accordion__up"))
    downArrow.classList.add("accordion__up");
  else if (downArrow.classList.contains) {
    downArrow.classList.remove("accordion__up");
  }
});
