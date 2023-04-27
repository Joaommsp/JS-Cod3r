function rand({ min = 0, max = 1000 }) {
  // os { } não representam um object aqui , mas sim uma forma de acessar objetos
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor) // arredonda para o menor numero inteiro
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 900 }))
console.log(rand({})) // navegando em 0 e 100(valores padroes)

let a = 45.453

console.log(Math.floor(a)) // arredonda para o menor numero inteiro
