// Dom events
// 1. Dom object
// -event type: change, submit, load, unload, open, play, canplay, pause, playing,  progress, ended, resize, scroll, toggle, etc. 

// -properties: type, target, preventDefult().

// 2. mouseEvent object
// 3. keyboardEvent object
// 4. focusEvent object
// 5. clipboardEvent object
// 6. dragEvent object

// Change event
var input = document.querySelector('input');
input.addEventListener('change', changer);

function changer(e) {
    console.log('Value changed');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    

};