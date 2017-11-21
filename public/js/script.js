/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Hi, I'm
//Will BESHORE
//this is my
//portfolio

var i = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;

var txt1 = "Hi, I'm";
var txt2= "Will Beshore";
var txt3= "this is my";
var txt4= "Portfolio"
var speed = 150;

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("lead1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("lead2").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed);
  }
}
function typeWriter3() {
  if (i < txt3.length) {
    document.getElementById("lead3").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed);
  }
}
function typeWriter4() {
  if (i < txt4.length) {
    document.getElementById("lead4").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed);
  }
}

function addActive() {
  document.getElementById("lead4").className += ' activate';
}
