document.querySelector('.player__start').onclick = play;

let video;

video = document.querySelector('.player__video');

function play() {
  video.play();
}