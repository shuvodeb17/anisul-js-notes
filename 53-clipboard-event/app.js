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

var input = document.querySelector("input");
var para = document.querySelector('p');
input.addEventListener("copy", function () {
  console.log("Copy");
  para.innerHTML = 'You have copied!!!'

});

input.addEventListener("cut", function () {
  console.log("Cut");
  para.innerHTML = 'You have cut!!!'
});

input.addEventListener("paste", function () {
  console.log("Paste");
  para.innerHTML = 'You have paste!!!'
});
