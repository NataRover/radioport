import "./css/style.css";
import "./scss/style.scss";

const player = document.createElement('div')
const pl = document.createElement('div')

pl.innerHTML = `sdffsfsdfsdfsdfsdfasdfasdasdasdas
sdfsdfsdfs`
player.appendChild(pl)
player.innerHTML += `<div class="my-player-img-title-song-wrapper">
<div class="img-my-player-wrapper">

</div>
<div class="my-player-title-song">
    <p>Lorem, ipsum dolor.</p><br>
    <p>Lorem ipsum dolor sit amet.</p>
</div>
</div>
<div class="my-player-btn-play-pause-hr-wrapper">
<div class="my-player-btn-play-pause-hr-wrapper-column">
    
    <div class="live">
        <hr>
        <div class="live-logo">LIVE</div>
        <hr>
    </div>
</div>
</div>
<div class="volume-wrapper">

<div class="slidecontainer">
    <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
</div>
</div>`
player.appendChild(pl)
// formiruem player chrerez takie ze elements

const body = document.getElementsByTagName('body')
body[0].appendChild(player)

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
