export function notNumber(value) {
  return isNaN(value) || value == ''
}

export function calculateIMC(weigth, height) {
  return (weigth / (height / 100) ** 2).toFixed(2)
}
