import "./css/style.css";
import "./scss/style.scss";

const btnPlay = document.querySelectorAll(".play-music-for-music-module"); //все кнорки play
const player = document.createElement("div"); //div плеера
const body = document.getElementsByTagName("body");

player.innerHTML += `
<div class="my-player" style="display:none">
    <div class="my-player-img-title-song-wrapper">
        <div class="img-my-player-wrapper">
            <img src="public/img/img_content/img_8.webp" alt="">
            </div>
            <div class="my-player-title-song">
            <p>Lorem, ipsum dolor.</p><br>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div class="my-player-btn-play-pause-hr-wrapper">
        <div class="my-player-btn-play-pause-hr-wrapper-column">
            <div class="my-player-btn-play-pause-wrapper">
                <img src="public/img/img_music_page/play-ico.svg" alt="" class="my-player-btn-play">
            </div>
            <div class="live">
                <hr>
                <div class="live-logo">LIVE</div>
                <hr>
            </div>
        </div>
    </div>
    <div class="volume-wrapper">
    <img src="img/img_music_page/volume.svg" alt="" class="volume">    
        <div class="slidecontainer">
            <input type="range" min="1" max="100" value="10" class="slider" id="volumecontroller">
        </div>
    </div>
</div> `;

//добавили плеер на каждую страницу
body[0].appendChild(player);
//сам плеер
let myPlayer = document.querySelector(".my-player") as any;

if (localStorage.player) {
  myPlayer.style.display = "flex";
}
//кнопка play на плеере
const btnPlayPlayer = document.querySelector(".my-player-btn-play");
const music = new Audio("gl.mp3");
let playing = false;

btnPlayPlayer?.addEventListener("click", playTrack);

function playTrack() {
  if (playing) {
    music.pause();
    btnPlayPlayer.src = "public/img/img_music_page/play-ico.svg";
  } else {
    music.play();
    btnPlayPlayer.src = "public/img/img_music_page/pause.svg";
  }
  playing = !playing;
}

// регулировка громкости

const volumeController = document.getElementById("volumecontroller");
volumeController.addEventListener("input", () => {
  HTMLMediaElement.volume = volumeController.value / 100;
});


/* Перебираем кнопки play*/
btnPlay.forEach(function (el) {
  /* Назначаем обработчик кнопкам */
  el.addEventListener("click", function () {
    console.log("click");

    if (myPlayer?.style.display === "none") {
      myPlayer.style.display = "flex";
      localStorage.player = true;
    } else {
      myPlayer.style.display = "none";
      localStorage.player = false;
    }
  });
});
