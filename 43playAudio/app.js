for(var i =0; i<3;i++){
    document.querySelectorAll('.play-music')[i].addEventListener('click',function(){
       var finder = this.innerHTML;
       console.log(finder);

       switch(finder){
        case "A":
            var audio = new Audio('audio/Aha_Re____আহারে____Minar_Rahman___Taneem_Rahman_Angshu___Superhit_Bangla_Song___Official_Music_Video(128kbps).mp3');
            audio.play();
            break;
        case "B":
            var audio = new Audio('audio/Jodi_Tumi_Jante_(Full_Song)___MINAR___Mehazabien___Apurba___Jakaria_Showkhin___Official_Video_Song(128kbps).mp3');
            audio.play();
            break;
        case "C":
            var audio = new Audio('audio/MINAR_RAHMAN___JHOOM____Official_Music_Video___New_Bangla_Song(128kbps).mp3');
            audio.play();
            break;
       }
    });
}