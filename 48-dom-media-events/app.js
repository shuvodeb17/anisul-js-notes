// Dom events
// 1. Dom object
// -event type: change, submit, load, unload, open, play, canplay, pause, playing,  progress, ended, resize, scroll, toggle (works with details ) beforeprint, afterprint etc.

// -properties: type, target, preventDefult().

// 2. mouseEvent object
// 3. keyboardEvent object
// 4. focusEvent object
// 5. clipboardEvent object
// 6. dragEvent object

// --------------------------------

// Dom media events
// html theke use korle sob gular age on use korte hobe...
// audio / video events
// canplay, play, playing, pause, progress, ended, volumechange, waiting

var video = document.querySelector("video");

// Canplay
video.addEventListener("canplay", function () {
  console.log("canplay");
});

//Play
video.addEventListener("play", function () {
  console.log("play");
});

//Playing
video.addEventListener("playing", function () {
  console.log("playing");
});

//Pause
video.addEventListener("pause", function () {
  console.log("pause");
});

//Ended
video.addEventListener("ended", function () {
    console.log("Thanks for watching");
  });

//Volumechange
video.addEventListener("volumechange", function () {
  console.log("volume change");
});

//Waiting
video.addEventListener("waiting", function () {
  console.log("waiting");
});
