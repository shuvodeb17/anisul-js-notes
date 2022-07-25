var allBtn = document.querySelectorAll('#btn1');
for(var i = 0; i < allBtn.length; i++){
    allBtn[i].addEventListener('click', function(){
        var changeText = document.getElementById('change-text');
        var textFinder = this.innerHTML;
        console.log(textFinder);
        changeText.innerHTML = 'You have clicked on ' + textFinder;
    });
};