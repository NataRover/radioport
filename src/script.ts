import './css/style.css'
import './scss/style.scss'


"use strict";
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

//BURGER-MENU-SHOW
const activBurgerMenu = document.querySelector(".header-burger-menu");
const activNav = document.querySelector(".audiobook-navigation-module");
const opacityBody = document.querySelector(".opasity-container");
activBurgerMenu?.addEventListener("click", function (e) {
  console.log("mmkm");
  activNav?.classList.remove("display-hidden");
  opacityBody?.classList.add("opacity");
  if (e.target !== activBurgerMenu) {
    activNav?.classList.remove("display-hidden");
    opacityBody?.classList.add("opacity");
  } else {
    activNav?.classList.add("display-hidden");
    opacityBody?.classList.remove("opacity");
  }
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

// СКРОЛЛ ОКНА
// SmoothScroll({
//   // Время скролла 400 = 0.4 секунды
//   animationTime: 800,
//   // Размер шага в пикселях
//   stepSize: 75,
//   // Дополнительные настройки:
//   // Ускорение
//   accelerationDelta: 30,
//   // Максимальное ускорение
//   accelerationMax: 2,
//   // Поддержка клавиатуры
//   keyboardSupport: true,
//   // Шаг скролла стрелками на клавиатуре в пикселях
//   arrowScroll: 50,
//   // Pulse (less tweakable)
//   // ratio of "tail" to "acceleration"
//   pulseAlgorithm: true,
//   pulseScale: 4,
//   pulseNormalize: 1,
//   // Поддержка тачпада
//   touchpadSupport: true,
// });

