// Armazenando uma funcao dentro de uma variável

const imprimirSoma = function (a, b) {
  console.log(a + b)
}

/*imprimirSoma(2, 3)

const teste01 = function (a, b) {
  return a + b
}

console.log(teste01(2, 5))*/

// armazenando uma funçao ARROW em uma variável

const soma = (a, b) => {
  return a + b
}

console.log(soma(4, 5))

// retorno implicito

const subtracao = (a, b) => a - b // a função com apenas uma linha tem retorno

console.log(subtracao(10, 5))

const imprimir2 = a => console.log(a)
imprimir2('João é o cara')
