const dig = document.getElementById("dig");
const btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let elem = e.currentTarget.id;
    if (elem == "dec") {
      count--;
    } else if (elem == "reset") {
      count = 0;
    } else {
      count++;
    }
    dig.textContent = count;
    dig.style.color = count < 0 ? "red" : "rgb(11, 149, 196)";
  });
});
