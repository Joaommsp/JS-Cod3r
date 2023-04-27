const nums = [1, 2, 3, 4, 5]

// Map é um for com propósito
let resultado = nums.map(function (e) {
  return e * 20
})

console.log(resultado)

// o map não transforma o array atual , mas sim cria um novo array

const soma10 = e => e + 10
const tripo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado)
