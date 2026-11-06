let currentSize = 16;

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
    
    fragment.appendChild(square);
  }
  
  container.appendChild(fragment);

  container.addEventListener("mouseover", (event) => {
    if (event.target !== container && event.target.tagName === "DIV") {
      event.target.style.backgroundColor = "orange";
    }
  });
}

function askNum(){
  const num = Number(prompt("Enter a number of squares per side (Max 100)"));
  if (num > 100) {
    return 100;
  }
  return num;
}

createGrid(16);

askNumButton.addEventListener("click", (event) => {
  createGrid(askNum());
});

resetButton.addEventListener("click", (event) => {
  if (currentSize === 16) {
    createGrid(16);
  } else {
    createGrid(currentSize);
  }
});