const error = document.getElementById("error-msg");

function check() {
  const input = document.getElementById("Email").value;
  const inputBox = document.getElementById("Email");
  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let result = emailRegx.test(input);
  if (result) {
    inputBox.style.borderColor = "rgb(28, 119, 0)";
    error.style.display = "none";
  } else {
    inputBox.style.borderColor = "red";
    error.style.display = "block";
  }
}
