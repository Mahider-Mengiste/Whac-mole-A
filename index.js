function game(){

      const cells = document.querySelectorAll('.cell')
      const mole = document.querySelector('.mole')
      const score = document.querySelector('.score')
      const time = document.querySelector('.time')
      const gameResult = document.querySelector('.game-result')

      let setMoleinterval;
      let randomCell;
      let result = 0;
      let randomCellId;
      let setTimeInterval;

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

      function clickMole() {
            cells.forEach(cell => {
                  cell.addEventListener('click', ()=>{
                        if (cell.id === randomCellId) {
                              result++
                              score.textContent = result
                        }
                  })
            })
      }
      clickMole()

      function timeCounter() {
            let timer = 10
            timer--
            time.textContent = timer
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

const startButton = document.querySelector('.startBtn')
startButton.addEventListener('click', game)
