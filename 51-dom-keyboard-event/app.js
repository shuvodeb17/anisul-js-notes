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

// keyboard event object
// 1.keydown - preasing a key, can reapet
// 2.keypress (may not supported by some browsers)
// 3.keyup
// Some properties - key, keycode, code, shiftkey, ctlkey, reapet

// -----------------------------------

var textArea = document.querySelector("textarea");
textArea.addEventListener("keydown", function (e) {
  console.log("keydown");
  
  if(e.repeat){
    alert('Do not repeat');
  }
  
});

textArea.addEventListener("keypress", function () {
  console.log("keypress");
});

textArea.addEventListener("keyup", function (e) {
    console.log("keyup");
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);
    console.log(e.shiftKey);
  
    if(e.shiftKey){
        console.log('shift + ' + e.key);
    }

  
});
