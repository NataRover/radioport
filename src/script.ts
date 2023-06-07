import "./css/style.css";
import "./scss/style.scss";

//FIXED MENU
window.addEventListener("scroll", function () {
  let fixedMenu = document.querySelector(".header-navigation");
  if (window.scrollY > 500) {
    fixedMenu?.classList.add("header-navigation-fixed");
  } else {
    fixedMenu?.classList.remove("header-navigation-fixed");
  }
});

//MENU-SHOW
const activBurgerMenu = document.querySelector(".header-burger-menu");
const activNav = document.querySelector(".audiobook-navigation-module");
const hiddenNav = document.querySelector(".opasity-container");

//скролл окна исчезает
function noScroll() {
  let html = document.documentElement;
  html.classList.add("noscroll");
}

//скролл окна появляется
function windowScroll() {
  let html = document.documentElement;
  html.classList.remove("noscroll");
}

//при нажатии на body боковое меню исчезает
function removeLeftNav() {
  activNav?.classList.add("display-hidden");
  activBurgerMenu?.classList.remove("display-hidden");
  hiddenNav?.classList.remove("add-bg");
  hiddenNav?.classList.add("display-hidden");
}

//нажатие на бургер меню,появляется боковое меню
activBurgerMenu?.addEventListener("click", function () {
  console.log("clickBurger");

  if (activNav?.classList.contains("display-hidden")) {
    activNav.classList.remove("display-hidden");
    activBurgerMenu.classList.add("display-hidden");
    hiddenNav?.classList.add("add-bg");
    hiddenNav?.classList.remove("display-hidden");
    noScroll();
  } else {
    removeLeftNav();
  }
});
// боковое меню исчезает при нажатии на body и убирается скролл
hiddenNav?.addEventListener("click", function () {
  console.log("clickBody")
  removeLeftNav();
  windowScroll();
});

// OBSERVER
const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let titleP = document.querySelectorAll(".right-p-title ");
        let titlePDrop = document.querySelectorAll(".right-p-drop-title");

        titleP.forEach((el) => {
          let id = el.getAttribute("href")?.replace("#", "");
          if (id === entry.target.id) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
        titlePDrop.forEach((el) => {
          if (
            el.id == document
              .querySelector("a.active")
              ?.getAttribute("href")
              ?.replace("#", "")
          ) {
            el.classList.remove("display-none");
          } else {
            el.classList.add("display-none");
          }
        });
      }
    });
  },
  {
    rootMargin: "0px 0px -80% 0px",
  }
);
document.querySelectorAll(".box").forEach((box) => observer.observe(box));



