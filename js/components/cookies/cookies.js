import "./cookies.css";

const cookies = document.querySelector(".cookies");
const cookiesBtn = document.querySelector(".cookies__cta");

cookiesBtn.addEventListener("click", onCookiesClick);

// Add cookies to the local storage
function onCookiesClick() {
    localStorage.setItem("cookies", true);
    cookies.classList.add("cookies-hide");
}

if(!localStorage.getItem('cookies')) {
    setTimeout(() => {
      cookies.classList.remove("cookies-hide");
    }, 5000);
}
