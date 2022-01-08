import "./header.css";

const burgerBtn = document.querySelector(".burger__cta");
const mobileMenu = document.querySelector(".mobile__nav");
const mobileNavLinks = document.querySelectorAll(".menu__item");

const mobileCloseBtn = document.querySelector(".close__cta");

mobileCloseBtn.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
    mobileMenu.classList.remove("mobile__nav--open");
    mobileMenu.classList.add("mobile__nav--close");
}

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile__nav--close");
  mobileMenu.classList.add("mobile__nav--open");
});

mobileNavLinks.forEach((mobileLink) => {
  mobileLink.addEventListener("click", () => {
      closeMobileMenu();
  });
});
