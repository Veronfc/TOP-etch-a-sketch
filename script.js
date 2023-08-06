const btn = document.querySelector('generate');
btn.addEventListener('click', generate);


function grid(squares) {
  for (let i=0; i<(Math.pow(squares, 2)); i++) {
    const grid = document.getElementById('grid');

    const block = document.createElement('div');
    block.classList.add('block');
    block.style.width = (650/squares) + 'px';
    block.style.height = (650/squares) + 'px';

    grid.appendChild(block);
  }
}

function generate() {
  let squares = prompt('Enter an integer from 1 to 100:');
  grid(squares);
}