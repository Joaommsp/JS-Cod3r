// A função é um verbo , uma ação que executa um processo baseado em uma sentença de código , é um trecho de código com entradas , comandos e resultado
// Função sem retorno

function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 78, 3) // o JS ignora os outros numeros
imprimirSoma()

//Função com retorno

function soma(a, b = 1) {
  return a + b // retorno
}

console.log(soma(2, 3))
console.log(soma(2)) // b =1 , ou seja 2 + 1 = 3
console.log(soma())

function Teste(x, y) {
  console.log('Olá')
  return console.log(x + y)
}
Teste(4, 5) //imprime Olá e a soma de x + y
//Quando não é especificado um valor para um RETURN, será retornado o valor UNDEFINED. Portanto, o return é utilizado para que um valor diferente do padrão seja retornadno na função.

function saudacao() {
  return 'Olá!'
}
saudacao()
console.log(saudacao())

//audacao() chama a função, mas não exibe nada em tela porque não existe um console.log para acessar o seu valor; console.log(saudacao()) é a chamada da função dentro do console.log. Aqui sim o valor retornado pelo return é impresso no output.

function cumprimento() {
  return console.log('E aí!')
}
cumprimento()

function saudadeDela(a, b) {
  a = 'Eu'
  b = 'vc'
  return console.log(a + ' e', b)
}

saudadeDela()
