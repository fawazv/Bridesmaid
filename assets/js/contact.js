// Contact Form
var name = document.forms["myForm"]["name"].value;
var email = document.forms["myForm"]["email"].value;
var subject = document.forms["myForm"]["subject"].value;
var comments = document.forms["myForm"]["comments"].value;
document.forms["myForm"]["name"].value = "";
document.forms["myForm"]["email"].value = "";
document.forms["myForm"]["subject"].value = "";
document.forms["myForm"]["comments"].value = "";

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});
