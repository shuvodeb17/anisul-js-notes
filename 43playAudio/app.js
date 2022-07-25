var allPlayBtn = document.querySelectorAll('.play-music');
for(var i = 0; i < allPlayBtn.length; i++){
    allPlayBtn[i].addEventListener('click', function(){
        var text = this.innerHTML;

        
        switch(text){
            case "A":
                var audio = new Audio('audio/1.mp3');
                audio.play();
                break;
            case "B":
                var audio = new Audio('audio/2.mp3');
                audio.play();
                break;
            case "C":
                var audio = new Audio('audio/3.mp3');
                audio.play();
                break;
        };
        
    });
};