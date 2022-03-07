const grid = document.querySelector('#grid');
let row,column;
for(let i = 1; i <=16; i++){ //Create a 16x16 grid of divs
    row = document.createElement('div');
    row.className = "row row" + i.toString();
    row.id = 
    grid.append(row);
    for(let i = 1; i <=16; i++){
        column = document.createElement('div');
        column.className = "column column" + i.toString();
        row.append(column);
    }
}