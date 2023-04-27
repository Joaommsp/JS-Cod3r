// hoisting significa "levantar" "jogar para cima"

function teste() {
  console.log('a =', a) // variável chamada antes de ser declarada
  var a = 'João' // variavel jogada para cima (içamento)
  console.log('a =', a)
}

/*teste()
console.log(a) // variável n disponivel fora da funçao*/

console.log(b)

let b = 2 // não ocorre o isçamento com LET
