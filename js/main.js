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
        console.log(element.style.backgroundColor);
        color = element.style.backgroundColor;
        let vals = color.substring(color.indexOf('(') + 1, color.length - 1).split(', ');
        let red = (vals[0] - 25.5) > 0 ? (vals[0] - 25.5) : 0;
        let green = (vals[1] - 25.5) > 0 ? (vals[1] - 25.5) : 0;
        let blue = (vals[2] - 25.5) > 0 ? (vals[2] - 25.5) : 0;
        console.log(red, blue, green);
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