/* Collects login information, */
function validateForm() {
  let x = document.forms["loginForm"]["user"]["password"].value;
  if (x == "") {
    console.log("Please fill out this field.");
  }
}

/* Hit 'log in' and goes to next page */
document.getElementById("login").addEventListener("click", redirectFunction);
    function redirectFunction() {
        window.location.href = "http://localhost:1337/home";
    }

/* Sign up button */
function clickFunction() {
    window.location.href = "http://localhost:1337/signup";
}