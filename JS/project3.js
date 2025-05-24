const num = document.getElementById("number");
const btn = document.getElementById("Generate");

btn.addEventListener("click", () => {
  const newNum = Math.floor(Math.random() * 100) + 1;
  num.textContent = newNum;
});
