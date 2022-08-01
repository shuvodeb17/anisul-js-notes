// Dom events
// 1. Dom object
// -event type: change, submit, load, unload, open, play, canplay, pause, playing,  progress, ended, resize, scroll, toggle, etc.

// -properties: type, target, preventDefult().

// 2. mouseEvent object
// 3. keyboardEvent object
// 4. focusEvent object
// 5. clipboardEvent object
// 6. dragEvent object

// Form
var form = document.querySelector('form');
var name12 = form.querySelector('div #name');
var email = form.querySelector('div #email');
var password = form.querySelector('div #password');

form.addEventListener('submit', formHandler);

function formHandler(e) {
    e.preventDefault();

    // Object
    var userInfo = {
        Name: name12.value,
        Email: email.value,
        Password: password.value,
    }
    console.log(userInfo);

    // Submit korer pore user data empty hoye jabe
    name12.value = '';
    email.value = '';
    password.value = '';

}