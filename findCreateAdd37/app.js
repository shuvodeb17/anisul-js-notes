// Class-37
// Find create add remove

// Notes
// 01. Method er pase () thakbe
// Dom methods = getElementById() 
// 02. Dom properties
// propeties er pase () thakbe na


// 0. ki ki class ace my-div a dekte cassi start here
// Class ki ki ase dekbo
var myDivClassList = document.getElementById('myDiv').classList;
console.log(myDivClassList);
// class list add
document.getElementById('myDiv').classList.add('creating-class-js', 'add-new');
// classList length
document.getElementById('myDiv').classList.remove('add-new');
// classList index number
var find = document.getElementById('myDiv').classList[1];
console.log(find);

// ki ki class ace my-div a dekte cassi end here





// 01. Find & get
var findGoogle = document.getElementsByTagName('a')[0];
console.log(findGoogle);

var facebookInnerhtml = document.getElementsByTagName('a')[1];
facebookInnerhtml.style.textDecoration = 'none';
console.log(facebookInnerhtml.innerHTML);

var myDiv = document.querySelector('#myDiv')

// href change
var visitGithub = document.getElementsByTagName('a')[2];
console.log(visitGithub.href = 'www.developershuvo.com');



// 02 Changing html elements



// 03. Creating html elements start here
// neser dike add hove
var heading = document.createElement('h1');
var createText = document.createTextNode('Neser dike add hove')
heading.appendChild(createText);

var myDiv = document.getElementById('myDiv');
myDiv.appendChild(heading);
// Creating html elements end here



// 04. Creating html elements start here
// uporer dike add hove
var headingZero = document.createElement('h1');
var headingZeroText = document.createTextNode('uporer dike add hove');
headingZero.appendChild(headingZeroText);

var myDivZero = document.getElementById('myDiv');
var headingOne = document.getElementsByTagName('h1')[0];
myDivZero.insertBefore(headingZero, headingOne);
// Creating html elements end here



// 05. remove element start here
var heading3 = document.getElementsByTagName('h3')[0];
myDiv.removeChild(heading3)
// remove element end here


// 06. unique start here
var chatBtn = document.getElementById('chat-btn');
chatBtn.addEventListener('click', function(){

    var inputText = document.getElementById('chat-input');

    var createDiv = document.createElement('div');
    createDiv.id = 'chat-show';

    var createPara = document.createElement('p');
    createPara.innerHTML = inputText.value;
    createDiv.appendChild(createPara);

    var chatShowUser = document.getElementById('chat-show-user');
    chatShowUser.appendChild(createDiv);


});
// unique end here