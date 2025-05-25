const btn = document.querySelector(".btn");
const out = document.querySelector(".out");
btn.addEventListener("click", () => {
  const pal = document.getElementById("pal").value;
  let newPal = "";
  let len = pal.length;
  for (let i = len; i >= 0; i--) {
    newPal += pal.charAt(i);
  }
  if (pal === newPal) {
    out.textContent = "It is a palindrome";
    out.style.color = "green";
  } else {
    out.textContent = "It is not a palindrome";
    out.style.color = "red";
  }
});
