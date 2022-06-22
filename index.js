// grab the div element with the class .grid
const grid  = document.querySelector(".grid")

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

 const displayMole = ()=> {
      //  grab .cell 
      // add a style to that element
      const cells = document.querySelector('.cell')
      // create a forEach loop to loop through each cell
      console.log(cells)
      cells.style.backgroundColor = '#a2836e';


 }
displayMole()

const createStartButton = ()=>{
      // create an element called start
      // add a class .class

      const start = document.createElement('button')
      start.classList.add("start")
      start.innerText = "Start"
      console.log(start)
      document.body.appendChild(start)
  
}

createStartButton()


