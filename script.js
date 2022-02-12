let color = "black"; //set default color

function createGrid(size) {
    let grid = document.querySelector(".etch-a-sketch-grid");
    let squares = grid.querySelectorAll("div");
  
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-item");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
    }
}
createGrid(16); //create the default 16x16 grid

function changeSize(input) {
    if (input >= 2 && input <= 64) {
        document.querySelector(".error").style.display = "none";
        createGrid(input);  
    } else {
        document.querySelector(".error").style.display = "flex";
        resetGrid();
    }
}
  
function colorSquare() {
    if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}
  
function changeColor(choice) {
    color = choice;
}
  
function resetGrid() {
    let grid = document.querySelector(".etch-a-sketch-grid");
    let squares = grid.querySelectorAll("div");

    squares.forEach((div) => (div.style.backgroundColor = "white"));
    color = "black";

    let input = parseInt(prompt("Choose a new grid size between 2 and 64.", "16"));
    changeSize(input);
}