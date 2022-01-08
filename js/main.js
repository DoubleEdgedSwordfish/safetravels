import "./components/header/header";
import "./components/places/places";
import "./components/info/info";
import "./components/reviews/reviews";
import "./components/faqs/faqs";
import "./components/footer/footer";

const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;

  if (window.scrollY <= 0) {
    nav.classList.remove('nav-scroll');
  }
});
