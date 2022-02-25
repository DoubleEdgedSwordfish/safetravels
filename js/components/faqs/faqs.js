import "./faqs.css";

const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    // If an accordion is already open then close it
    const isAccordionOpen = document.querySelector(".accordion__header.active");
    if (isAccordionOpen && isAccordionOpen !== header) {
      isAccordionOpen.classList.remove("active");
      isAccordionOpen.nextElementSibling.style.maxHeight = 0.10 + "px"
    }
    
    // Open and close an accordion at will
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;
    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "10" + "px";
    } else {
      header.classList.remove("active")
      accordionContent.style.maxHeight = 0.01 + "px";
    }
  });
});
