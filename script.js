// Reference to important variables and constants
const gridContainer = document.getElementById('container');
const cells = document.querySelectorAll('.cell');
const colorPicker = document.querySelector('#colorpicker');
const reset = document.querySelector('#reset');
const rgb = document.querySelector('#rgb');
const eraser = document.querySelector('#eraser');


function makeGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

// generating random RGB color
function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

// Color pallete
function chosenColor() {
    let colorPicked = colorpicker.value;
    let cell = gridContainer.children;
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.style.background = colorPicked;
        })
    }
}

// setting the backgroundColor of the cells to none
function eraseBtn() {
    let cell = gridContainer.children;
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('mouseover', function(e) {
            e.target.style.background = '';
        })
    }
}

makeGrid();


rgb.addEventListener('click', function() {
    let cell = gridContainer.children;
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('mouseover', function(e) {
            e.target.style.background = getRandomColor();
        })
    }
});

// Reset button to clear the screen
reset.addEventListener('click', () => cells.forEach(cell => cell.style.background = ''));

colorPicker.addEventListener('input', chosenColor);

eraser.addEventListener('click', eraseBtn);