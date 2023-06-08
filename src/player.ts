import "./css/style.css";
import "./scss/style.scss";

let btnPlay = document.querySelectorAll(".play-music");
let btnPlayPause = document.querySelectorAll(".play-pause-music");
console.log(btnPlayPause)

/* Перебираем кнопки play*/
btnPlay.forEach(function (el) {
  /* Назначаем обработчик кнопкам */
  el.addEventListener("click", function () {
    console.log("click");
    // btnPlayPause.src = "../img/img_music_page/pause.svg";
  });
});
