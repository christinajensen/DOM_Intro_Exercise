window.onload = function() {
  // 1.
  var greeting = document.getElementById("greeting");
  greeting.innerText = "Hello, World";

  // 2.
  var listItems = document.getElementsByTagName("li");

  for (var i = 0; i < listItems.length; i++) { //listItems are an array-like object and has to be looped through
    listItems[i].style.backgroundColor = "yellow";
  }

  // 3.
  var img = document.createElement("img");
  img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  var src = document.getElementById("greeting");
  src.appendChild(img);

  // Afterwards: 
  // 1. 
  var ul = document.getElementsByTagName("ul");
  
  ul[0].addEventListener('click', function(e) {
    var listItems = document.getElementsByTagName("li");
    for (var j = 0; j < listItems.length; j++) {
      listItems[j].className = "";
    }  
    e.target.className = "selected";
  });

  // 2.
  // var images = ["./images/beer.jpeg", "./images/honey.jpeg", "./images/milk.jpeg", "./images/water.jpeg", "./images/wine.jpeg"];
  // var foodImg = document.getElementsByTagName("img");

  // 3.
  var grayDiv = document.getElementById("ghosting");
  var body = document.getElementsByTagName("body");

  grayDiv.addEventListener('mouseover', function() {
  document.body.removeChild(grayDiv);
  });

  // 4.
  var orangeDiv = document.getElementById("resize");

  orangeDiv.addEventListener('mouseover', function() {
    orangeDiv.style.width = "400px";
  });
  
  orangeDiv.addEventListener('mouseleave', function() {
    orangeDiv.style.width = "200px";
  });

  // 5.
  var resetButton = document.getElementById("reset");

  resetButton.addEventListener('click', function(e) {
    var listItems = document.getElementsByTagName("li");
    for (var k = 0; k < listItems.length; k++) {
      listItems[k].className = "";
    }  
    var img = document.getElementsByTagName("img");
    img[1].setAttribute("src","./images/panic.jpeg");
  });

  // 6.
  
};

