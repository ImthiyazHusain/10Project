const powerBtn = document.querySelector(".power");
const body = document.body;

powerBtn.addEventListener("click", () => {
  body.classList.toggle("on");
});
