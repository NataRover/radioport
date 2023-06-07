import "./css/style.css";
import "./scss/style.scss";

let icoPlay = document.querySelectorAll(".ico-play");

/* Перебираем списки */
icoPlay.forEach(function (el) {
  /* Назначаем обработчик текущему списку */
  el.addEventListener("click", function () {
    console.log("click")
    // el.src = "../img/img_music_page/pause.svg";
  });
});
