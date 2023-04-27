const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // ver se o valor da variável é inteiro ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.29342
const avaliacao2 = 8.9383

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // .tofixed define a quantidade de casa decimais desejadas

console.log(media.toString()) // converte o valor em string

console.log(media.toString(2)) // converte o valor em binário

console.log(typeof media)
console.log(typeof Numbern)
