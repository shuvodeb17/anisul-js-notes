// // text area
// var count = 0;
// document.getElementById('text-area').addEventListener('keypress', function(){
//     count++;
//     document.querySelector('.text-area-counter').innerHTML = 'Character = ' + count;
// });


// // normal para
// document.addEventListener('keypress', function(event){
//     var text = event.key;
//     document.getElementById('normal-para').innerHTML = 'You have pressed ' + text;
// });


// // text counter
// var input = document.getElementById('inp-counter');
// var counterShow = document.getElementById('counter-show');

// input.addEventListener('input', function(){
//     counterShow.innerHTML = input.value.length;
// });






var textArea = document.querySelector('#text-area');
var textAreaCounter = document.querySelector('.text-area-counter');
var count = 0;
textArea.addEventListener('keypress', function () {
    count++;
    textAreaCounter.innerHTML = 'Character = ' + count;
});


document.addEventListener('keypress', function (event) {
    var text = event.key;
    document.getElementById('normal-para').innerHTML = 'You have pressed ' + text;
});

var inputCounter = document.getElementById('inp-counter');
var counterShow = document.getElementById('counter-show');
inputCounter.addEventListener('input', function () {
    counterShow.innerHTML = inputCounter.value.length;
});