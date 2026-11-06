function createGrid (num) {
  const container = document.querySelector(".container");
  const fragment = document.createDocumentFragment();

  let totalSquares = 16 * 16;

  if (num === undefined || num === 0) {
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("child");
      
      square.style.width = `${100 / 16}%`;
      square.style.height = `${100 / 16}%`;
      
      fragment.appendChild(square);
    }
  } else {
    totalSquares = num * num;
    container.replaceChildren();
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("child");
      
      square.style.width = `${100 / num}%`;
      square.style.height = `${100 / num}%`;
      
      fragment.appendChild(square);
    }
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

const askNumButton = document.createElement("button");

askNumButton.classList.add("ask-num", "btn");
askNumButton.textContent = "Change Grid Layout";

document.body.prepend(askNumButton);

createGrid();

askNumButton.addEventListener("click", (event) => {
  createGrid(askNum());
});