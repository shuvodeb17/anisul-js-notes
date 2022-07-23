var imgTag = document.getElementById('imgTag');
var images = ['img/1.jpeg', 'img/2.jpg', 'img/3.jpg'];
var count = 0;

function next() {
    count++;
    if (count >= images.length) {
        count = 0;
        imgTag.src = images[count];
    } else {
        imgTag.src = images[count];
    }
}

function previous() {
    count--;
    if (count < 0) {
        count = images.length - 1;
        imgTag.src = images[count];
    } else {
        imgTag.src = images[count];
    }
}

else {
        imgTag.src = images[count];
    }
