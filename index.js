// grab the div element with the class .grid
const grid  = document.querySelector(".grid")
console.log(grid)
// inside the grid create 9 more divs to create a 3x3 grid
      // createElement and append it to the parent div
      // loop 9 times to have the div's
 for (let i = 0; i < 9; i++) {
let cell = document.createElement('div')
// append cell into the grid
grid.appendChild(cell)
// add a class to the newly created divs
cell.classList.add('cell')  
// add an id 
cell.setAttribute("id", i);

 }  


