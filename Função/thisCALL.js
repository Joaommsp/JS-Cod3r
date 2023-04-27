let ninja = {
  nome: 'João',
  fala: function () {
    console.log(`${this.nome} usou sua katana`)
  }
}

ninja.fala()

var menina = {
  nome: 'Ana',
  fala: function () {
    console.log(`Olá meu nome é ${this.nome}`)
  }
}

var nome = 'Carla'
var dizer = menina.fala
dizer.call(menina)
// carro e moto

const carro = {
  placa: '72827BA',
  mostarNumero: function () {
    console.log(this.placa)
  }
}

carro.mostarNumero()

const moto = {
  placa: '8347384AL'
}

carro.mostarNumero.call(moto)
