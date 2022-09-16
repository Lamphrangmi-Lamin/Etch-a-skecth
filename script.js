const gridContainer = document.getElementById('container');
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
makeGrid();

// function eraseBtn() {
    
// }

const cells = document.querySelectorAll('.cell');
const colorPicker = document.querySelector('#colorpicker');
const reset = document.querySelector('#reset');
const eraser = document.querySelector('#eraser');

cells.forEach(cell => cell.addEventListener('mouseenter', () => cell.style.background = colorPicker.value));
cells.forEach(cell => cell.addEventListener('click', () => cell.style.background = ''));
reset.addEventListener('click', () => cells.forEach(cell => cell.style.background = ''));
eraser.addEventListener('click', () => {
    for(let i  = 0; i < cells.length; i++) {
        cells[i].addEventListener('h-over', () => cells[i].style.background = '');
    }
});