      const cells = document.querySelectorAll('.cell')
      const mole = document.querySelector('.mole')
      const score = document.querySelector('.score')
      const time = document.querySelector('.time')
      const gameResult = document.querySelector('.game-result')
      const startButton = document.querySelector('.startBtn')

      let setMoleinterval;
      let randomCell;
      let result = 0;
      let randomCellId;
      let setTimeInterval;
      let timer = 10

function game(){
      function removeMole(){
            cells.forEach(cell => {
                  cell.classList.remove('mole')
            })
      }
  

      function selectRandomCell() {
            removeMole()
            randomCell= cells[Math.floor(Math.random() * cells.length)]
            console.log(randomCell)
            randomCell.classList.add('mole')
            randomCellId = randomCell.id
      }
      selectRandomCell()

      
      function moveMole(){
            setMoleinterval = setInterval(selectRandomCell, 3000)   
      }
      moveMole()  

      function clickMole(e) {
            for (let i = 0; i < 9 ; i++) {
                 cells[i]
            //      console.log( cells[i])
                 cells[i].addEventListener('click', (e)=>{
                        if (e.target.id === randomCellId) {
                              result++
                              score.textContent = result
                              
                              
                        }
                 })
            }
      }
     
      clickMole()
      function timeCounter() {
            timer--
            time.textContent = timer
            console.log("the timer is working")
                  if (timer === 0 && result < 5) {
                        clearInterval(setTimeInterval)
                        clearInterval(setMoleinterval)
                        gameResult.textContent = `Game over, your final score is ${result}`
                  }
                  if (timer === 0 && result > 5) {
                        clearInterval(setTimeInterval)
                        clearInterval(setMoleinterval)
                        gameResult.textContent = `You won, your final score is ${result}`
                  }

      }
      setTimeInterval = setInterval(timeCounter,1000)

}

startButton.addEventListener('click', game)
