import "./css/style.css";
import "./scss/style.scss";

("use strict");
var message = "Hello World";
console.log(message);

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

function noScroll() {
  let html = document.documentElement;
  html.classList.add("noscroll");
}
function windowScroll() {
  let html = document.documentElement;
  html.classList.remove("noscroll");
}

activBurgerMenu?.addEventListener("click", function (e) {
  console.log("clickBurger");

  if (activNav?.classList.contains("display-hidden")) {
    activNav.classList.remove("display-hidden");
    activBurgerMenu.classList.add("display-hidden");
    hiddenNav?.classList.add("add-bg");
    hiddenNav?.classList.remove("display-hidden");
    noScroll();
  } else {
    activNav?.classList.add("display-hidden");
    activBurgerMenu.classList.remove("display-hidden");
    hiddenNav?.classList.remove("add-bg");
    hiddenNav?.classList.add("display-hidden");
  }
});
// menu hidden
hiddenNav?.addEventListener("click", function () {
  console.log("clickCont");
  activNav?.classList.add("display-hidden");
  activBurgerMenu?.classList.remove("display-hidden");
  hiddenNav?.classList.remove("add-bg");
  hiddenNav?.classList.add("display-hidden");
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
            el.id ==
            document
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

// КНОПКА PLAY
let playShow = document.querySelectorAll(".wrapper-play-radio");
let icoPlay = document.querySelectorAll(".ico-play");

for (let i = 0, q = 0; i < playShow.length, q < icoPlay.length; i++, q++) {
  playShow[i].addEventListener("mouseover", function () {
    icoPlay[q].classList.add("visible");
  });
  playShow[i].addEventListener("mouseout", function () {
    icoPlay[q].classList.remove("visible");
  });
}

let wrapperGrid = document.querySelectorAll(".wrapper-grid-img");
let icoPlayGrid = document.querySelectorAll(".ico-play-grid");

for (
  let j = 0, f = 0;
  j < wrapperGrid.length, f < icoPlayGrid.length;
  j++, f++
) {
  wrapperGrid[j].addEventListener("mouseover", function () {
    icoPlayGrid[f].classList.add("visible");
  });
  wrapperGrid[j].addEventListener("mouseout", function () {
    icoPlayGrid[f].classList.remove("visible");
  });
}
