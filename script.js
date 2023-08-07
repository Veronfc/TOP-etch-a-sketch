const genbtn = document.getElementById('generate');
genbtn.addEventListener('click', generate);

const clearbtn = document.getElementById('clear');
clearbtn.addEventListener('click', clear)

const grid = document.getElementById('grid');

function draw(squares) {
  for (let i=0; i<(Math.pow(squares, 2)); i++) {

    const block = document.createElement('div');
    block.classList.add('block');
    block.style.width = (650/squares) + 'px';
    block.style.height = (650/squares) + 'px';
    block.onmouseenter = function() {
      block.style.backgroundColor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
    }

    grid.appendChild(block);
  }

  color();
}

function generate() {
  grid.innerHTML = '';

  let squares = Math.floor(prompt('Enter an integer from 1 to 100:'));

  if (!Number.isInteger(squares)){
    squares = 64;
  }

  if (squares > 100) {
    squares = 100;
  } 
  else if (squares < 0){
    squares = 1;
  }

  draw(squares);
}

function color() {
  let base =  Math.floor(Math.random() * (256));
  
  return base;
}

function clear() {
  const all = grid.childNodes;
  for (let i = 0; i < all.length; i++) {
    all[i].backgroundColor = 'white';
  }
}