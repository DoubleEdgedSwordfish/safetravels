import "./components/header/header";
import "./components/places/places";
import './components/counters/counters';
import "./components/info/info";
import "./components/reviews/reviews";
import "./components/faqs/faqs";
import "./components/footer/footer";
import './components/cookies/cookies';

const infoTitle = document.querySelector('.info__title');
const infoSubtitle = document.querySelector('.info__description');
const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const cardThree = document.querySelector(".card-three");
const cardFour = document.querySelector(".card-four");

let observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        infoTitle.style.animation = "left-slide 2s";
        infoSubtitle.style.animation = "right-slide 2s";
        cardOne.style.animation = "left-slide 1.5s";
        cardTwo.style.animation = "right-slide 2s";
        cardThree.style.animation = "left-slide 2s";
        cardFour.style.animation = "right-slide 1.5s"
    }
  });
});
observer.observe(infoTitle);


