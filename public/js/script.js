/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var i = 0;
var o = 0;
var txt1 = 'WILL BESHORE WEB DEVELOPER';
var txt2= "Beshore";
var speed = 200;

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("lead").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function toggle_visibility() {
      var e = document.getElementById("cursor");
      if(e.style.display == 'block')
         e.style.display = 'none';
      else
         e.style.display = 'block';

       }

  var t=setInterval(toggle_visibility,500);
  t();
