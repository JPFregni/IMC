import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    resetInputs()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)

  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.open()
  resetInputs()
  Modal.message.innerText = message
}

inputWeight.oninput = () => {
  AlertError.close()
}
inputHeight.oninput = () => {
  AlertError.close()
}

function resetInputs() {
  inputWeight.value = ''
  inputHeight.value = ''
}
