//Header accordion menu to browse content
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Hero slider for Popular Articles

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides-container");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//Slider for Collections

var collectionIndex = 1;
showCol(collectionIndex);

function plusCol(n) {
  showCol(collectionIndex += n);
}

function showCol(n) {
  var i;
  var x = document.getElementsByClassName("collection");
  if (n > x.length) {collectionIndex = 1}
  if (n < 1) {collectionIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[collectionIndex-1].style.display = "block";
}


//Collapsible cards

var coll = document.getElementsByClassName("collapsible");
var x;

for (x = 0; x < coll.length; x++)
{
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.display.style = "none";
    } else {
      content.display.style = "block";
    }
  });
}


