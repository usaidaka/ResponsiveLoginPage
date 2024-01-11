// TOGGLE PASSWORD
function myFunction() {
  let x = document.getElementById("myInput");
  let y = document.getElementById("off");
  let z = document.getElementById("on");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}
