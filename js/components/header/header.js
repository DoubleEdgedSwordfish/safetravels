import "./header.css";

const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger__cta");
const mobileMenu = document.querySelector(".mobile__nav");
const mobileNavLinks = document.querySelectorAll(".menu__item");

const mobileCloseBtn = document.querySelector(".close__cta");
mobileCloseBtn.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.remove("mobile__nav--open");
  mobileMenu.classList.add("mobile__nav--close");
  document.body.style.overflow = "auto";
  window.addEventListener("scroll", navScroll);
}

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile__nav--close");
  mobileMenu.classList.add("mobile__nav--open");
  document.body.style.overflow = "hidden";
  window.removeEventListener("scroll", navScroll);
});

mobileNavLinks.forEach((mobileLink) => {
  mobileLink.addEventListener("click", () => {
    closeMobileMenu();
  });
});

// Add functionality to the fixed nav
let lastScrollY = window.scrollY;
window.addEventListener("scroll", navScroll);

function navScroll() {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;

  if (window.scrollY <= 0) {
    nav.classList.remove("nav-scroll");
  }
}

// Date Input Logic
const checkInInput = document.querySelector('.check-in');
const checkOutInput = document.querySelector('.check-out');

checkInInput.addEventListener('focus', () => {
  getDate();
})

function getDate() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
/*   const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateString = year + '/' + month + '/' + day; */
  checkInInput.value = formattedDate;
  checkOutInput.value = formattedDate;
}



