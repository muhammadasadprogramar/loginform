let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("password").value;

let login = document.getElementById("btn");

login.addEventListener("click", () => {
  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  if (userEmail == "asad9988@gmail.com" && userPassword == 112234) {
    window.location.href = "https://github.com/muhammadasadprogramar";
  } else {
    alert("Please try again");
  }
});
