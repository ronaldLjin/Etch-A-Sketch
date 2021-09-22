const gridArea = document.querySelector("#grid");
let gridAreaStyle = document.getElementsByClassName('grid')
const gridLine = document.querySelector('.gridline')
gridLine.textContent = "No Grid-line";
const clear = document.querySelector('#clear')

function gridSize(width) {
    let gridSquare = [];
    for (i = 0; i < width * width; ++i) {
        gridSquare[i] = document.createElement("div");
        gridSquare[i].classList.add('cell')
        gridArea.appendChild(gridSquare[i])
    }
    gridArea.style.cssText = `display: grid; grid-template-columns: repeat(${width}, auto); background-color: black; grid-gap: 1px`;

    for (i = 0; i < gridSquare.length; i++) {
        gridSquare[i].addEventListener("mouseover", changeColor(i))
    }

    function changeColor(i) {
        return function() {
            gridSquare[i].style.cssText = 'background-color: black'
        };
    }

    gridLine.addEventListener("click", () => {
        if (gridLine.textContent == 'No Grid-line') {
            gridArea.style.cssText = `display: grid; grid-template-columns: repeat(${width}, auto); background-color: black; grid-gap: 0px`;
            gridLine.textContent = "Grid-line";
        } else {
            gridArea.style.cssText = `display: grid; grid-template-columns: repeat(${width}, auto); background-color: black; grid-gap: 1px`;
            gridLine.textContent = "No Grid-line"
        }
    });

    clear.addEventListener("click", () => {
        for (i = 0; i < gridSquare.length; i++) {
            gridSquare[i].style.cssText = 'background-color: white'
        }
    })
}

gridSize(25)