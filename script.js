let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlicon = document.getElementById("play")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.duration = song.currentTime;


}

function playpause() {
    if (ctrlicon.classList.contains("fa-pause")) {
        song.pause()   
        ctrlicon.classList.replace("fa-pause", "fa-play")
    }else{
        song.play()
        ctrlicon.classList.replace("fa-play", "fa-pause")
    }
}
if (song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlicon.classList.replace("fa-play", "fa-pause")
    
}
function skip() {
    song.currentTime = song.currentTime + 5;
}
function pre(){
    song.currentTime = song.currentTime - 5;
}