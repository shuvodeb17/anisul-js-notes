// Onlick property function
function myMessage2(){
    alert('Aleart 2')
}


var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var paraId = document.getElementById('paraId')

btn3.addEventListener('click', function(){
    var result = this.innerText;
    console.log('You have click on ' + result);
})

btn4.addEventListener('click', function(){
    var result2 = this.innerText;
   console.log('You have click on ' + result2);
    
});

// image changer
var imgChangerBtn1 = document.getElementById('img-change1');
var imgChangerBtn2 = document.getElementById('img-change2');
var imgChangeResult = document.getElementById('img-change-result');

imgChangerBtn1.addEventListener('click', function(){
    imgChangeResult.src = 'img/50 Minimalist Desktop Wallpapers and Backgrounds (2021 Edition).jpeg';
});

imgChangerBtn2.addEventListener('click', function(){
    imgChangeResult.src = 'img/61da821ca9470.jpg';
});
