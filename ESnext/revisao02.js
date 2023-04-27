// Arrow function
const soma = (a, b) => a + b // funções arrow sempre são anonimas , por isso q são atribuídas a variáveis ou constantes
console.log(soma(1, 3))

// Arrow Function(this)
const lexico01 = () => console.log(this === module.exports)
const lexico02 = lexico01.bind()
lexico01()
lexico02()

// parâmetro default
function log(texto = 'Node') {
  console.log(texto)
}
log()
log('Sou mais forte que o valor padrão')

// Rest
function total(...numeros) {
  // o rest pega os parâmetros passados e cria um array
  let total = 0
  numeros.forEach(n => (total += n))
  return total
}

console.log(total(1, 2, 3, 4, 5))
