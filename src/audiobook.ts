//КАРУСЕЛЬ
const gap = 14;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.querySelector(".btn-carousel-next"),
  prev = document.querySelector(".btn-carousel-prev");

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
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel?.offsetWidth;
window.addEventListener("resize", () => (width = carousel?.offsetWidth));

//BUUTON PLAY

let playButtonShow = document.querySelectorAll(".wrapper-book-file-img-play");
let buttonPlay = document.querySelectorAll(".ico-pl-test");

for (
  let i = 0, q = 0;
  i < playButtonShow.length, q < buttonPlay.length;
  i++, q++
) {
  playButtonShow[i].addEventListener("mouseover", function () {
    buttonPlay[q].classList.add("display-block");
  });
  playButtonShow[i].addEventListener("mouseout", function () {
    buttonPlay[q].classList.remove("display-block");
  });
}
