// // grab the div element with the class .grid

// const grid  = document.querySelector(".grid")

// // inside the grid create 9 more divs to create a 3x3 grid
//       // createElement and append it to the parent div
//       // loop 9 times to have the div's

//  for (let i = 0; i < 9; i++) {
// let cell = document.createElement('div')
// // append cell into the grid
// grid.appendChild(cell)
// // add a class to the newly created divs
// cell.classList.add('cell')  
// // add an id 
// cell.setAttribute("id", i);

//  }  
// //  display the mole that is going to be clicked
// //  const displayMole = ()=> {
// //       //  grab .cell 
// //       // add a background color to that element
// //       const cell = document.querySelector('.cell')
// //       console.log(cell)
// //       cell.style.backgroundColor = '#a2836e';

// //  }
// // displayMole()

// let startButton = document.getElementById('btn')

// startButton.addEventListener("click",generateRandomCell)

// function generateRandomCell(){
//       // grab every cell from the DOM
//       const cells = document.querySelectorAll('.cell')
//       // pick a random number cell and assign it to randomCell
//       let randomCell = cells[Math.floor(Math.random() * cells.length)] 
//       // add a style to the radomCell
//       randomCell.style.backgroundColor = "red"
//       // i want each of the cells to be styled after one another 
//             // add a new class for just one cell and first style that
//             // then, grab that new class and add it to the enitre cell

// }

// // generateRandomCell()

// // getelementbyId the button
// // add an event listner and when the button is listend 
// // fire onstartButtonClicked 
//       // grab the first cell from the grid, and assign it a new background(Mole)
// // 
// ############################################################################################################################################################

// before the game function, the 3x3 grid is already created -
// 'title', ' time left: ', and 'score:' promt is showing - 

function game(){

 selectRanomCell();
 const cells = document.querySelectorAll('.cell')
 const mole = document.querySelector('.mole')


selectRandomCell()
      // select all the .cell clasess using queryselectorAll and store it as  cells (PS - declare it globaly)
      // select .mole class that was given in only one of the cell div, and styled "backgroud-color:blue" in css. store it as a mole (PS - declare it globaly)
      // pass the mathrandom() that returns random number to cells and store it as randomCell
      // add .mole class to randomCell 
      
// the moveMole() is going to move the mole in a setinterval accross the grid
      // let setMoleinterval = setinterval() and pass randomCell to be called every 1000 milisec  (PS - declare it globaly)

// clickMole() is going to listen if the mole has been clicked and then increment game result by 1
      // let result = 0 (PS - declare it globaly)
      // select all the .cell clasess using queryselectorAll and store it as cells.  (PS - declare it globaly)
      // foreach cells, add an eventListner for a "click" and call an  anonymous function
      // if (cell.id === randomCell.id)
      // {
            // result++
            // select .score from the dom and store it as score  (PS - declare it globaly)
            //score.textContext = result
       // }

// timeCounter() is going to countdown seconds and clear interval once the timer reaches 0
      // select .time from the DOM and store it as time  (PS - declare it globaly)
      // let timer = 10
      // timer--
      // time.textContext = timer
      // if (timer === 0 && result < 5)
      // {
            // clearInterval( setIntervalId)
            // clearInterval(setintervalID)
            // alert Game over, your final score is + result
            // }
      // if(timer ===0 && result > 5 ){
            // clearInterval( setTimeInterval)
            // clearInterval(setMoleinterval)
            // alert you won, your final score is + result
      // }    
// 

// let setTimeInterval = setinterval(timeCounter,1000)

}