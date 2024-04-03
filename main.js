const initialScreen = document.querySelector('.initial-screen')
const guessText = document.querySelector('.initial-screen p')
const finishedScreen = document.querySelector('.finished-screen')
const finishedText = finishedScreen.querySelector('h2')
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

const buttonTry = document.querySelector('#button-try')
const buttonReset = document.querySelector('#button-reset')

const toggleScreen = () => {
  initialScreen.classList.toggle('hide')
  finishedScreen.classList.toggle('hide')
}

const handleClick = (event) => {
  event.preventDefault()

  const numberInput = document.querySelector('#numberInput')
  const wrongAnswer = numberInput.value != randomNumber

  if(numberInput.value < 0 || numberInput.value > 10) {
    alert('O número deve ser entre 0 e 10')
    return
  }

  if(wrongAnswer) {
    guessText.innerText = `${attempts}° tentativa, tente novamente!`

    attempts++
    numberInput.value = ''

    return
  }

  toggleScreen()

  attempts > 1 ? finishedText.innerText = `Acertou em ${attempts} tentativas!` : finishedText.innerText = `Acertou em ${attempts} tentativa!`
}

const handleResetClick = (event) => {
  event.preventDefault()

  toggleScreen()

  attempts = 1

  guessText.textContent = 'Adivinhe o número entre 0 e 10'
  numberInput.value = ''
  randomNumber = Math.round(Math.random() * 10)
}

 buttonTry.addEventListener('click', handleClick)
 buttonReset.addEventListener('click', handleResetClick)