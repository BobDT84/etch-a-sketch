function makeGrid(size=16){
    const grid = document.querySelector('#grid');
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    let block;
    for(let i = 0; i<size**2; i++){
        block = document.createElement('div');
        block.className = 'block';
        block.addEventListener('mouseover', changeColor);
        grid.append(block);
    }
}

function changeColor(event){
    event.target.classList.add('mouseOver');
}

function clear(){
    let block = document.getElementsByClassName('mouseOver');
}
makeGrid(30);