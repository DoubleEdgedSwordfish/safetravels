import "./faqs.css";

const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    // If an accordion is already open then close it
    const isAccordionOpen = document.querySelector(".accordion__header.active");
    if (isAccordionOpen && isAccordionOpen !== accordionHeader) {
      isAccordionOpen.classList.toggle("active");
      isAccordionOpen.nextElementSibling.style.maxHeight = null;
    }
    
    // Open and close an accordio at will
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;
    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      header.classList.remove("active")
      accordionContent.style.maxHeight = null;
    }
  });
});

/* function setAccordionContentHeight() {
  const elements = document.querySelectorAll('.accordion__content > div')

  elements.forEach(el => {
    el.parentElement.style.setProperty('--item-height', (el.offsetHeight + 32) + 'px');
  })
}

window.addEventListener('resize', setAccordionContentHeight);

setAccordionContentHeight(); */
