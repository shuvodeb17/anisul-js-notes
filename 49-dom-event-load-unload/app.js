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

// load, unload,
// scroll
// resize
// toggle - details

window.addEventListener("load", function () {
  console.log("load");
});

window.addEventListener("unload", function () {
  console.log("unload");
});

window.addEventListener("resize", function () {
  console.log("resize");
});

// window width & height log
window.addEventListener("resize", function () {
  var height = window.outerHeight;
  var width = window.outerWidth;
  console.log(`height: ${height}, width: ${width}`);
});

window.addEventListener("scroll", function () {
  console.log("scroll");
});



var details = document.querySelector("details");
details.addEventListener("toggle", function (e) {
  console.log(e.target.open);

  if (e.target.open) {
    console.log("Thank you for opening");
  } else {
    console.log("Thank you for closeing");
  }
});
