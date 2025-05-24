const btn = document.querySelector("button");
const change = document.getElementById("name");

btn.onclick = function () {
  const name = prompt("Enter your name: ");
  change.innerText = name;
};
