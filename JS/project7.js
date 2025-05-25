const sp = document.getElementById("sp");
sp.addEventListener("click", () => {
  const txt = document.getElementById("pass");
  if (txt.type === "text") {
    txt.type = "password";
  } else {
    txt.type = "text";
  }
});
