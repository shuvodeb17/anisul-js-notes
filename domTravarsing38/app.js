// Dom travrasing and manupulation-38

// 01. Downwards
    // 01.querySelector() / querySelectorAll();
    // 02.children

// 02. upWards
    // 01.parentElement

// 03. sideWays
    // 01. nextElementSibling, previousElementSibling
    // 02. parentElement + children + index



// 01. Downwards
// 01.querySelector() / querySelectorAll();
var studentList = document.querySelector('.student-list');
console.log(studentList);
var studentA = studentList.querySelector('.student-b');
console.log(studentA);

// 02.children
var childrenStudentList = document.querySelector('.student-list');
childrenStudentList.children;
console.log(childrenStudentList);

// 02. index diye children select
var studentC = childrenStudentList.children[2];
console.log(studentC);




// 02. upWards
// 01.parentElement
var upWardsStudentA = document.querySelector('.student-d');
var upWards = upWardsStudentA.parentElement;
console.log(upWards);



// 03. sideWays nextElementSibling
var studentI = document.querySelector('li');
var studentA = studentI.nextElementSibling;
var studentB = studentA.nextElementSibling;
console.log(studentA);
console.log(studentB);

// nextElementSibling

var studentPrevious = document.querySelectorAll('li')[4];
var studentD = studentPrevious.previousElementSibling;
var studentE = studentD.nextElementSibling;
var studentF = studentE.nextElementSibling;
var studentNextJ = document.querySelectorAll('li')[7]
var studentK = studentNextJ.nextElementSibling;
console.log(studentD);
console.log(studentE);
console.log(studentF);
console.log(studentK);
