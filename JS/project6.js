const btn = document.getElementById("btn");
const out = document.getElementById("out");
btn.addEventListener("click", () => {
  const inpt = document.getElementById("num").value;
  if (isprime(inpt)) {
    out.textContent = `${inpt} is a prime number`;
    out.style.color = "green";
  } else {
    out.textContent = `${inpt} is not a prime number`;
    out.style.color = "red";
  }
});

function isprime(inpt) {
  if (inpt <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(inpt); i++) {
    if (inpt % 1 == 0) {
      return false;
    }
  }
  return true;
}
