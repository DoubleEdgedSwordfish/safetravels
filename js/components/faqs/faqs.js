import "./faqs.css";

const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    // If an accordion is already open then close it
    const isAccordionOpen = document.querySelector(".accordion__header.active");
    if (isAccordionOpen && isAccordionOpen !== accordionHeader) {
      isAccordionOpen.classList.toggle("active");
      isAccordionOpen.nextElementSibling.style.maxHeight = 0;
    }

    // Open and close an accordio at will
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;
    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

// Button rating logic
/* const positiveBtns = document.querySelectorAll(".rating__cta.positive");
const ratingSearch = document.querySelectorAll(".rating__search");
const firstRating = document.querySelector(".rating__positive");
const secondRating = document.querySelector(".rating__negative");
 */
/* let positiveRating = firstRating.innerHTML;
let negativeRating = secondRating.innerHTML;

positiveBtns.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    positiveRating++;
    firstRating.innerHTML = positiveRating;
    buttons.removeEventListener('click');
  });
});
 */
/* let randomNum = Math.floor(Math.random() * 100); */
/* ratingSearch.forEach(ratings => {
})
 */
