import "./css/style.css";
import "./scss/style.scss";

let btnPlay = document.querySelectorAll(".play-music-for-music-module");
let myPlayer = document.getElementsByClassName("my-player");

/* Перебираем кнопки play*/
btnPlay.forEach(function (el) {
  /* Назначаем обработчик кнопкам */
  el.addEventListener("click", function () {
    console.log("click");
   myPlayer
  });
});
