/*console.log('Escola '.concat(escola).concat('!')) // diferente do NUMBER  , pode-se chamar O LITERAL  do valor sem precisar estar em uma variavel ou constante */

function string(numero) {
  let string = ''
  for (let i = 0; i < numero; i++) {
    string += '+'
  }
  return string
}

console.log(string(5))
