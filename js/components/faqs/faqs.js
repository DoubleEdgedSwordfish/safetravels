import "./faqs.css";

const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    // If an accordion is already open then close it
    const isAccordionOpen = document.querySelector('.accordion__header.active');
    if (isAccordionOpen && isAccordionOpen !== accordionHeader) {
      isAccordionOpen.classList.toggle('active');
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
const positiveBtn = document.querySelector(".rating__cta.positive");
const ratingSearch = document.querySelectorAll(".rating__search");

let randomNum = Math.floor(Math.random() * 100);
ratingSearch.forEach(ratings => {
  ratings.childNodes.forEach(rating => {
    /* rating.textContent = `Search ${randomNum} out of ${randomNum * 2 / 1} found this helpful.` */
  })
})

positiveBtn.addEventListener('click', () => {
  console.log("clicked")
})
