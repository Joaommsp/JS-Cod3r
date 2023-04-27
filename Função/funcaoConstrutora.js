function Carro(velocidadeMax = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0

  // método público
  this.acelerar = function () {
    // o this é responsável por tornar algo visível para fora da função
    if (velocidadeAtual + delta <= velocidadeMax) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMax
    }
  }
  // método público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}

const uno = new Carro() // pode ser sem usar o () já que tem os valores padroes
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // funcao
console.log(typeof ferrari) // objeto
