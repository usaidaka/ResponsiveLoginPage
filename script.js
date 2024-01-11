// TOGGLE PASSWORD
function myFunction() {
  let x = document.getElementById("myInput");
  let y = document.getElementById("off");
  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
  } else {
    x.type = "password";
    y.style.display = "none";
  }
}
