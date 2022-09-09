// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.getElementById("current-color");
const palette = document.getElementById("palette")
const resetBtn = document.getElementById("reset-color");
const fillBtn = document.getElementById("fill-color");

palette.addEventListener("click", setColor);
main.addEventListener("mousedown", fillColor);
resetBtn.addEventListener("mousedown", resetColor);
fillBtn.addEventListener("mousedown", fillAllCell);

function setColor(e) {
  const div = e.target.closest("div");
  const bg = div?.style?.background;
  if (!bg) return;

  currentColor.style.background = bg;
}

function fillColor(e) {
  const div = e.target.closest("div");
  if (!div) return;

  div.style.background = currentColor.style.background;
}

function resetColor() {
  const divs = Array.from(document.querySelectorAll(".cell"));
  for (const div of divs) {
    div.style.background = "white";
  }
}

function fillAllCell() {
  const divs = Array.from(document.querySelectorAll(".cell"));
  for (const div of divs) {
    div.style.background = currentColor.style.background;
  }
}
  






  



  // if ("click" === "background: black")
  // colors === black;

  // else if ("click" === "background: red")
  // colors === red;

  // else if ("click" === "background: orange")
  // colors === orange;

  // else if ("click" === "background: yellow")
  // colors === yellow;

  // else if ("click" === "background: green")
  // colors === green;

  // else if ("click" === "background: blue")
  // colors === blue;

  // else if ("click" === "background: purple")
  // colors === purple;

  // else if("click" === "background: white")
  // colors === white;








