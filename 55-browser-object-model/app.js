// BOM (Browser object modal)
// window object
// location object

console.clear();
console.log(window);
console.log(document);

// href
console.log(location.href);

// protocol
console.log(location.protocol);

// hostname
console.log(location.hostname);

// port
console.log(location.port);

// pathname
console.log(location.pathname);

// Select
var locationDiv = document.querySelector(".location-div");
var children0 = locationDiv.children[0];
children0.innerHTML = location.href;

var children1 = locationDiv.children[1];
children1.innerHTML = location.protocol;

var children2 = locationDiv.children[2];
children2.textContent = location.hostname;

var children3 = locationDiv.children[3];
children3.textContent = location.pathname;

var children4 = locationDiv.children[4];
children4.textContent = location.port;

var button = document.querySelector("button");
button.addEventListener("click", function () {
  location.assign("https://www.youtube.com/");
});
