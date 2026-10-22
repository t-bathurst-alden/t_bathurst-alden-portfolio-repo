const player = document.querySelector("video");
const playerCon = document.querySelector("#player-container");
const playButton = document.querySelector("#playbutton");
const pauseButton = document.querySelector("#pausebutton");
const stopButton = document.querySelector("#stopbutton");
const volumeSlider = document.querySelector("#changevolume");
const fullScreen = document.querySelector("#fullscreen");

// If JS is loaded, the default controls should be gone

player.controls = false;

function playVideo() {
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 1;
}

function changeVolume() {
    //console.log("volumeSlider.value");
    //volume roperty is a value between 0 and 1
    player.volume = volumeSlider.value;
}

function togglefullScreen() {
    //console.log("Fullscreen fired");
    if(document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        playerCon.requestFullscreen();
    }

}

playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("input", changeVolume);
fullScreen.addEventListener("click", togglefullScreen); 