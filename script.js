const gridArea = document.querySelector("#grid");
let gridAreaStyle = document.getElementsByClassName('grid')
const gridLine = document.querySelector('.gridline')
gridLine.textContent = "Grid-line On";
const clear = document.querySelector('#clear')
let pixelSlider = document.querySelector('#pixelSlider')
let output = document.querySelector('#demo')
pixelSlider.onchange = (e) => pixelSliderChange(e.target.value)
let gridSquare = [];
const random = document.querySelector('#random')
window.addEventListener("load", startup, true)
let cellColor = '#000000';
const eraser = document.getElementById('eraser')

pixelSliderChange = function(value) {
    output.innerHTML = `${value} x ${value}`;
    gridArea.innerHTML = '';
    if (gridLine.textContent == 'Grid-line Off') {
        gridSize(value);
        gridArea.style.gridGap = '1px';
    } else {
        gridSize(value);
    }
}


function gridSize(width) {
    for (i = 0; i < width * width; ++i) {
        gridSquare[i] = document.createElement("div");
        gridSquare[i].classList.add('cell')
        gridArea.appendChild(gridSquare[i])
    }
    gridArea.style.cssText = `display: grid; grid-template-columns: repeat(${width}, auto); background-color: #c5c5c5`;

    for (i = 0; i < gridSquare.length; i++) {
        gridSquare[i].addEventListener("mouseover", changeColor(i))
    }

    random.addEventListener("click", () => {
        for (i = 0; i < gridSquare.length; i++) {
            gridSquare[i].addEventListener("mouseover", createRandomColor);
        }
    })

    function changeColor(i) {
        return function() {
            gridSquare[i].style.backgroundColor = `${cellColor}`
        };
    }

    eraser.addEventListener('click', functionOne)

    function functionOne() {
        cellColor = 'white';
        removeRandomColorForAllCells();
    }
}

clear.addEventListener("click", () => {
    for (i = 0; i < gridSquare.length; i++) {
        gridSquare[i].style.cssText = 'background-color: white'
    }
})

function removeRandomColorForAllCells() {
    for (i = 0; i < gridSquare.length; i++) {
        gridSquare[i].removeEventListener("mouseover", createRandomColor);
    }
}

function createRandomColor() {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cellColor = '#' + randomColor
}


function watchColorPicker(event) {
    cellColor = event.target.value;
    removeRandomColorForAllCells();
}

function startup() {
    colorPicker = document.querySelector('#colorpicker')
    colorPicker.value = "#000000";
    colorPicker.addEventListener("input", watchColorPicker, true);
}

gridLine.addEventListener("click", () => {
    if (gridLine.textContent == 'Grid-line Off') {
        gridArea.style.gridGap = '0px';
        gridLine.textContent = 'Grid-line On';
    } else {
        gridArea.style.gridGap = '1px';
        gridLine.textContent = 'Grid-line Off';
    }
});


gridSize(25)