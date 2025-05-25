const btn = document.querySelector(".btn");
const out = document.querySelector(".out");
btn.addEventListener("click", () => {
  const ch = document.getElementById("ch").value;
  const cha = ch.charCodeAt(0);
  out.textContent = cha;
});
