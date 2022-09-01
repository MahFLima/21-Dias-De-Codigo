let keys = document.querySelectorAll(".key");
let whiteKeys = document.querySelectorAll(".key.white");
let blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => {
    key.addEventListener("mousedown", () => {
        playnote(key);
    });
    key.addEventListener("mouseup", () => {
      playnote(key);
  });
})


document.addEventListener("keydown", e => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE.indexOf(key);
    const blackKeyIndex = BLACK.indexOf(key);
    if (whiteKeyIndex > -1) playnote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playnote(blackKeys[blackKeyIndex]);

})

function playnote(key) {

    let noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.volume = 1.0;
    noteAudio.play();
    key.classList.add('press');
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("press");
    })
}

const WHITE = ["d", "f", "g", "h", "j", "k", "l"];
let BLACK = ["r", "t", "y", "u", "i"];
