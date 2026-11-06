let currentSize = 16;
let isDrawing = false;

const buttonContainer = document.createElement("div");
const askNumButton = document.createElement("button");
const resetButton = document.createElement("button");

buttonContainer.classList.add("btn-container");

askNumButton.classList.add("ask-num", "btn");
askNumButton.textContent = "Change Grid Layout";

resetButton.classList.add("reset", "btn");
resetButton.textContent = "Reset";

document.body.prepend(buttonContainer);
buttonContainer.append(askNumButton);
buttonContainer.append(resetButton);

function darkenSquare(square) {
  let currentAlpha = parseFloat(square.dataset.alpha) || 0;

  if (currentAlpha < 1) {
    let newAlpha = (currentAlpha + 0.2).toFixed(1);
    
    square.dataset.alpha = newAlpha;
    
    square.style.backgroundColor = `rgba(255, 165, 0, ${newAlpha})`;
  }
}

function createGrid (num) {
  const container = document.querySelector(".container");
  const fragment = document.createDocumentFragment();
  
  currentSize = num;
  let totalSquares = num * num;

  totalSquares = num * num;
  container.replaceChildren();
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("child");
    
    square.style.width = `${100 / num}%`;
    square.style.height = `${100 / num}%`;

    square.dataset.alpha = "0";
    square.style.backgroundColor = "rgba(255, 165, 0, 0)";
    
    fragment.appendChild(square);
  }
  
  container.appendChild(fragment);

}

const container = document.querySelector(".container");

container.addEventListener("mousedown", (event) => {
  if (event.target !== container && event.target.tagName === "DIV") {
    event.preventDefault();
    isDrawing = true;
    darkenSquare(event.target);
  }
})

container.addEventListener("mouseover", (event) => {
  if (isDrawing && event.target !== container && event.target.tagName === "DIV") {
    darkenSquare(event.target);
  }
});

window.addEventListener("mouseup", (event) => {
  isDrawing = false;
});

function askNum(){
  const num = Number(prompt("Enter a number of squares per side (Max 100)"));
  if (num > 100) {
    return 100;
  } else if (num === 0 || !num) {
    return 16;
  }
  return num;
}

createGrid(16);

askNumButton.addEventListener("click", (event) => {
  createGrid(askNum());
});

resetButton.addEventListener("click", (event) => {
  createGrid(currentSize);
});