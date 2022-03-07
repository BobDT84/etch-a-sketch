const grid = document.querySelector('#grid');
let row,column;
for(let i = 1; i <=16; i++){ //Create a 16x16 grid of divs
    row = document.createElement('div');
    row.className = "row row" + i.toString();
    grid.append(row);
    for(let i = 1; i <=16; i++){
        column = document.createElement('div');
        column.className = "column column" + i.toString();
        column.addEventListener('mouseover', changeColor);
        row.append(column);
    }
}

function changeColor(event){
    event.target.classList.add('hover');
}