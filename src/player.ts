import "./css/style.css";
import "./scss/style.scss";

let btnPlay = document.querySelectorAll(".play-music-for-music-module");
let myPlayer = document.getElementsByClassName("my-player");
const player = document.createElement("div");
const body = document.getElementsByTagName("body");
body[0].appendChild(player);

// const pl = document.createElement('div')
// pl.innerHTML = `sdffsfsdfsdfsdfsdfasdfasdasdasdas
// sdfsdfsdfs`
// player.appendChild(pl)
// player.appendChild(pl)
// formiruem player chrerez takie ze elements

player.innerHTML += `<div class="my-player d-none">
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
            <img src="public/img/img_music_page/pause.svg" alt="" class="my-player-btn-pause">
        </div>
        <div class="live">
            <hr>
            <div class="live-logo">LIVE</div>
            <hr>
        </div>
    </div>
</div>
<div class="volume-wrapper">
    <svg width="30px" height="30px" data-testid="muted" viewBox="0 0 30 30"
        class="volume-control-module__overflowVisible___R7sn0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.61977 10.4286H3V19.5714H7.61977V10.4286Z" stroke="#1c203c" stroke-width="1.5"></path>
        <path d="M14.5498 23H12.2399L7.62012 19.5714V10.4286L12.2399 7H14.5498V23Z" stroke="#1c203c"
            stroke-width="1.5"></path>
        <path
            d="M20.9102 11.7402C21.8802 12.5702 22.5002 13.7802 22.5002 15.1502C22.5002 16.5202 21.8702 17.7302 20.9102 18.5602"
            stroke="#1c203c" stroke-width="1.5" stroke-miterlimit="10"></path>
        <path
            d="M24.1006 21.7498C25.8806 20.1098 27.0006 17.7598 27.0006 15.1498C27.0006 12.5398 25.8806 10.1898 24.1006 8.5498"
            stroke="#1c203c" stroke-width="1.5" stroke-miterlimit="10"></path>
        <path
            d="M20.9102 18.5602C21.8802 17.7302 22.5002 16.5202 22.5002 15.1502C22.5002 13.7802 21.8702 12.5702 20.9102 11.7402"
            stroke="#1c203c" stroke-width="1.5" stroke-miterlimit="10"></path>
    </svg>
    <div class="slidecontainer">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div>
</div>
</div> `;

/* Перебираем кнопки play*/
btnPlay.forEach(function (el) {
  /* Назначаем обработчик кнопкам */
  el.addEventListener("click", function () {
    console.log("click");
    myPlayer.classList.remove("d-none");
  });
});
 