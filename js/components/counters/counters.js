import "./counters.css";

const counterDiv = document.querySelector(".counters");
const counters = document.querySelectorAll(".counter__number");
const speed = 300;

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.textContent;
          const inc = target / speed;

          if (count < target) {
            counter.textContent = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
          } else {
            count.textContent = target;
          }
        };
        updateCount();
      });
    }
  });
});

observer.observe(counterDiv);