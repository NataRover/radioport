import "./css/style.css";
import "./scss/style.scss";

//КАРУСЕЛЬ
const gap = 14;

let carousel = document.getElementById("carousel") as any;
let content = document.getElementById("content") as any;
let next = document.querySelector(".btn-carousel-next") as any;
let prev = document.querySelector(".btn-carousel-prev") as any;

let width = carousel?.offsetWidth;
window.addEventListener("resize", () => (width = carousel?.offsetWidth));

next?.addEventListener("click", () => {
  carousel?.scrollBy(width + gap, 0);
  if (carousel?.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev?.addEventListener("click", () => {
  carousel?.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (
    (!content.scrollWidth as any) - width - gap <=
    carousel.scrollLeft + width
  ) {
    next.style.display = "flex";
  }
});

//BUUTON PLAY
//на карусели
let playButtonShow = document.querySelectorAll(".wrapper-book-file-img-play");
let buttonPlay = document.querySelectorAll(".ico-pl-test");

for (
  let i = 0, q = 0;
  i < playButtonShow.length, q < buttonPlay.length;
  i++, q++
) {
  playButtonShow[i]?.addEventListener("mouseover", function () {
    buttonPlay[q].classList.add("display-block");
  });
  playButtonShow[i]?.addEventListener("mouseout", function () {
    buttonPlay[q].classList.remove("display-block");
  });
}
