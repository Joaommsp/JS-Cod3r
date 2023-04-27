const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  //operacao = soma
  console.log(operacao(a, b)) // operaçao = soma = function(x,y)
}

imprimirResultado(4, 3)
imprimirResultado(4, 3, soma)
imprimirResultado(3, 4, function (x, y) {
  // funcçao dentro de funçaõ é comum JS
  return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

function teste(mulher) {
  return console.log(`${mulher} é uma mulher`)
}

teste('Ana')
