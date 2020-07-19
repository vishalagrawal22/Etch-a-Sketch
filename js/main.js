const CONTAINERSIZE = 960;
let squaresPerSide = 16;
const clearButton = document.querySelector("#clear");
const mainContainer = document.querySelector("#main-container");

function createGrid() {
    const baseArea = document.createElement('section');
    baseArea.id = "base-area";
    for (let rowNo = 1; rowNo <= squaresPerSide; rowNo++) {
        let row = createRow(rowNo);
        baseArea.appendChild(row);
    }
    mainContainer.appendChild(baseArea);
}

function createRow(rowNo) {
    const row = document.createElement('div');
    row.id = `Row${rowNo}`;
    row.classList.add("row");
    row.style.height = `${Math.floor(CONTAINERSIZE / squaresPerSide)}px`;
    // Number Of Rows = Number Of Element Per Row as this is a square
    for (let elementNo = 1; elementNo <= squaresPerSide; elementNo++) {
        let element = createElement(elementNo);
        row.appendChild(element);
    }
    return row;
}

function createElement(elementNo) {
    const element = document.createElement('div');
    element.id = `Element${elementNo}`;
    element.classList.add("element");
    element.style.height = `${Math.floor(CONTAINERSIZE / squaresPerSide) - 2}px`;
    element.style.width = `${Math.floor(CONTAINERSIZE / squaresPerSide) - 2}px`;
    element.style.backgroundColor = "#fff";
    element.addEventListener("mouseover", () => {
        let red = Math.ceil(Math.random() * 255); 
        let green = Math.ceil(Math.random() * 255); 
        let blue = Math.ceil(Math.random() * 255); 
        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
    return element;
}

function removeOldGrid() {
    const baseArea = document.querySelector("#base-area");
    mainContainer.removeChild(baseArea);
}

function setSquaresPerSide() {
    squaresPerSide = Number(prompt("How many squares you want per side?","16"));
}

function clearGrid() {
    setSquaresPerSide();
    removeOldGrid();
    createGrid();
}

createGrid();
clearButton.addEventListener("click", clearGrid);