// Dom events
// 1. Dom object
// -event type: change, submit, load, unload, open, play, canplay, pause, playing,  progress, ended, resize, scroll, toggle, etc.

// -properties: type, target, preventDefult().

// 2. mouseEvent object
// 3. keyboardEvent object
// 4. focusEvent object
// 5. clipboardEvent object
// 6. dragEvent object

console.clear();
// Change event
var input = document.querySelector("input");
input.addEventListener("change", changer);

function changer(e) {
  console.log(input.value);
  console.log("Value changed");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
}

// selector
var email = document.querySelector("input[name=email]");
var number = document.querySelector("input[name=number]");
email.addEventListener("change", emailChanger);
number.addEventListener("change", numberChanger);

function emailChanger() {
  console.log(email.value);
}

function numberChanger(e) {
  console.log(number.value);
  console.log(e.target);
  console.log(e.target.className);
  console.log(e.target.id);
  console.log(e.target.value);
}

// Checkbox
// Multiple element a j vave listner add korte hoy
var checkbox = document.querySelectorAll("input[name=checkboxes]");

Array.from(checkbox).map((checkboxes) => {
  checkboxes.addEventListener("change", checkboxFun);
});

function checkboxFun(e) {
  if (e.target.checked) {
    console.log("checked");
    console.log(e.target.value);
  }
}

// Select
var select = document.querySelector("select[name=depertment]");
select.addEventListener("change", selectFun);

function selectFun(e) {
  console.log(e.target.value);
}


