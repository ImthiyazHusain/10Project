const input = document.getElementById("in");
const Gp = document.getElementById("Gp");
const Cp = document.getElementById("Cp");

Gp.addEventListener("click", () => {
  const char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRISTUVWXYZ1234567890!@#$%^&*><?";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
    console.log(password);
  }
  input.value = password;
});

Cp.addEventListener("click", () => {
  const cpy = document.getElementById("in").value;
  if (!cpy == "") {
    navigator.clipboard.writeText(cpy).then(() => {
      alert("copied : " + cpy);
    });
  } else {
    alert("There must be any text!");
  }
});
