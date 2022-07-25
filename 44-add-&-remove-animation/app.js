for (var i = 0; i < 3; i++) {
    document.querySelectorAll('.play-music')[i].addEventListener('click', function () {
        var text = this.innerHTML;
        console.log(text);
        playAnimation(text);


        
        
    });
};


// Animation
function playAnimation(text){
    var selectedBtn = document.querySelector("." + text);
    selectedBtn.classList.add('anim');

    setTimeout(function(){
        selectedBtn.classList.remove('anim');
    },1000);
};