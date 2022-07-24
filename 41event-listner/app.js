var heading = document.getElementById('head');
heading.addEventListener('mouseover', function(){
    heading.classList.toggle('add-style');
});

heading.addEventListener('mouseout', function(){
    heading.classList.add('add-style');
});