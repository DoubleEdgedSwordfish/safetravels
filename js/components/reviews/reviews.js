import "./reviews.css";

const prevButton = document.querySelector(".prev__button");
const nextButton = document.querySelector(".next__button");
const slides = document.querySelectorAll(".reviews__card");
const totalSlides = slides.length;
let slidePosition = 0;

/* nextButton.addEventListener("click", moveToNextSlide)
function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition()
}

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('card--visible');
    }
    slides[slidePosition].classList.add('card--visible')
}


prevButton.addEventListener('click', moveToPrevSlide)
function moveToPrevSlide() {
      if (slidePosition === 0 ) {
        slidePosition = 0;
    } else {
        slidePosition--;
    }
}
 */