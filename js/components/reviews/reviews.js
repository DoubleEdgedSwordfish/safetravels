import "./reviews.css";

let swiper = new Swiper(".carousel-slider", {
  autoplay: {
    spaceBetween: 20,
    delay: 2500,
    disableOnInteraction: false,
  },
    slidesPerView: "2",
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 1.2,
      },
      630: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 1.7,
        spaceBetween: 5,
      },
      1120: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  