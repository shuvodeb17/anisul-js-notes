var dragDiv = document.getElementById("drag-div");
var para = document.getElementById("drop-event");

para.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("Pera", e.target.id);
});

dragDiv.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dragDiv.addEventListener('drop', function(e){
  var getId = e.dataTransfer.getData('Pera');
  console.log(getId);
  dragDiv.appendChild(document.getElementById(getId));
  e.preventDefault();
})
