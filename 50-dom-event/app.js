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

// Mouse event
// <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <parm>, <base>, <bdo>
// ---------------------------------
// onclick
// ondblclick
// onmousedown
// onmousesedup
// onmouseenter
// onmouseleave
// onmousemove
// onmouseover

var div = document.querySelector("div");
div.addEventListener("click", function (e) {
  console.log(e.type);
  console.log("Click is occured ");
  console.log(e);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.innerHTML);
  console.log(e.target.innerText);
  console.log(e.target.textContent);
});

div.addEventListener("dblclick", function () {
  console.log("Double click is occured ");
});

div.addEventListener("mousedown", function () {
  console.log("Mouse down is occured ");
});

div.addEventListener("mouseup", function () {
  console.log("Mouse up is occured ");
});

div.addEventListener("mouseenter", function () {
  console.log("Mouse enter is occured ");
});

div.addEventListener("mouseleave", function () {
  console.log("Mouse leave is occured ");
});

div.addEventListener("mouseover", function () {
  console.log("Mouse over is occured ");
});

div.addEventListener("mouseout", function () {
  console.log("Mouse out is occured ");
});

div.addEventListener("mousemove", function (e) {
  console.log("clietX = " + e.clientX, "clienY = " + e.clientY);
  console.log("offsetX =" + e.offsetX, "offsetY = " + e.offsetY);
});

var allButtons = document.querySelectorAll("button");
Array.from(allButtons).map((anyName) => {
  anyName.addEventListener("click", function (e) {
    console.log("clicked");
    var text = this.innerHTML;
    console.log(text);
    console.log(e.target.innerText);
  });
});
