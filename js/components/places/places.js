import "./places.css";

const places = document.querySelector(".places");
const card = document.querySelector(".card-animate");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        places.style.animation = "fadeIn 2.5s ease-out";
        /* card.style.animation = "fadeIn 2s ease-out"; */
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(places, card);

// Todo: Fix this whole damn thing!