 function getAllUsers() {
  fetch('/api/user').then(function(response) {
      if (response.status !== 200) {
          console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
          return;
      }
      response.json().then(function(data) {  
      var userHtml ="<ol>";
          for(i in data) {
            userHtml += "<li id='" + data[i].id + "'>" + data[i].email + "</li>";
          }  
    userHtml += "</ol>";
    document.getElementById('users').innerHTML = userHtml;
      });
  });
} 

function logIn(userId) {
	// set the cookie!
	var now = new Date();
	var EXPIRE_TIME = 10000; // 10 seconds
	now.setTime(now.getTime() + EXPIRE_TIME);
	document.cookie = "userId=" + userId +";expires=" 
		+ now.toUTCString() + ";";
    window.location='http://localhost:1337/home';
}

function userClick() {
	var targetElement = event.target || event.srcElement;
	logIn(targetElement.id);
}

var usersEl = document.getElementById('users');
usersEl.addEventListener("click", userClick)

getAllUsers();

/* Collects login information, */
/* document.getElementById("myFrame").addEventListener("load", loadFunction);
  function loadFunction() {
    fetch('/api/user').then(function(response) {
      if (response.status !== 200) {
        console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
        return;
      }
      response.json().then(function(data) {
        var userHtml = "<ol>";
        for (i in data) {
          userHtml += "<li id='" + data[i].email + "</li>";
        }
        userHtml += "</ol>";
        document.getElementById("user").innerHTML = userHtml;
      });
    });
    document.getElementById("demo").innerHTML = "Website loaded.";
  } */

/* function validateForm() {
  let x = document.forms["loginForm"]["user"]["password"].value;
  if (x == "") {
    console.log("Please fill out this field.");
  }
}

/* Hit 'log in' and goes to next page 
document.getElementById("loginbutton").addEventListener("click", redirectFunction);
  function redirectFunction() {
    window.location.href = "http://localhost:1337/home";
}

/* Sign up button 
function clickFunction() {
    window.location.href = "http://localhost:1337/signup";
} */