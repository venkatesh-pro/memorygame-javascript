const memoryGamecontainer = document.querySelector('.memory-game')
const memoryGame = document.querySelectorAll('.memory-card')
const finished = document.querySelector('.finished')
const replay = document.querySelector('.replay')

let hasFlippedCard = false
let count = 0
let firstCard, secondCard

function flipcard() {
  this.classList.toggle('flip')
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
  } else {
    secondCard = this
    hasFlippedCard = false
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener('click', flipcard)
      secondCard.removeEventListener('click', flipcard)
      count++
      countSix()
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
      }, 1000)
    }
  }
}
memoryGame.forEach((div) => div.addEventListener('click', flipcard))

function countSix() {
  if (count === 6) {
    console.log(finished)

    setTimeout(() => {
      finished.classList.add('display')
      memoryGamecontainer.classList.add('remove')
    }, 200)
    replay.addEventListener('click', (e) => {
      location.reload()
    })
  }
}
