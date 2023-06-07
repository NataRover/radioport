import "./css/style.css";
import "./scss/style.scss";

//КАРУСЕЛЬ
const gap = 14;

let carousel = document.getElementById("carousel");
let content = document.getElementById("content");
let next = document.querySelector(".btn-carousel-next");
let prev = document.querySelector(".btn-carousel-prev");

let width = carousel?.offsetWidth;
window.addEventListener("resize", () => (width = carousel?.offsetWidth));

next?.addEventListener("click", () => {
  carousel?.scrollBy((width as any) + gap, 0);
  if (carousel?.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev?.addEventListener("click", () => {
  carousel?.scrollBy(-((width as any) + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

