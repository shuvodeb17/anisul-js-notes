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
input.addEventListener("blur", function (e) {
  console.log("blur is occured");
  console.log(e.target.value);
  this.classList.remove("focus");

  //   Same system
  this.classList.add("text-uppercase");
  input.value = e.target.value.toUpperCase();
});

input.addEventListener("focus", function () {
  console.log("focus is occured");
  this.classList.add("focus");
});

input.addEventListener("focusin", function () {
  console.log("focusin is occured");
});

input.addEventListener("focusout", function () {
  console.log("focusout is occured");
});
