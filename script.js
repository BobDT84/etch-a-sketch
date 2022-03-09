function makeGridOld(size = 16){
    const grid = document.querySelector('#grid');
    let row,column;
    for(let i = 1; i <=size; i++){ //If size = 16 then create a 16x16 grid of divs
        row = document.createElement('div');
        row.className = "row";
        grid.append(row);

        for(let i = 1; i <=size; i++){
            column = document.createElement('div');
            column.className = "column";
            column.addEventListener('mouseover', changeColor);
            row.append(column);
        }
    }
}

function makeGrid(size=16){
    const grid = document.querySelector('#grid');
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    let block;
    for(let i = 0; i<size**2; i++){
        block = document.createElement('div');
        block.className = 'block';
        grid.append(block);
    }
}

function changeColor(event){
    event.target.classList.add('mouseOver');
}

makeGrid(30);