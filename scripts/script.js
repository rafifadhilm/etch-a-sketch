const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();

const size = 16;
const totalSquares = size * size;

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("child");
  
  square.style.width = `${100 / size}%`;
  square.style.height = `${100 / size}%`;

  fragment.appendChild(square);
}

container.appendChild(fragment);

container.addEventListener("mouseover", (event) => {
  if (event.target !== container && event.target.tagName === "DIV") {
    event.target.style.backgroundColor = "orange";
  }
});