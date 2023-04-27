console.log(typeof console)

console.log(Math.ceil(6.1))

// colocando atributos no objeto usando o ponto

const obj1 = {}

obj1.nome = 'bola'
//obj1['nome'] = 'bola2' mesmca coisa do de cima -_-

console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome // criar atributos para fora quando a função for instanciada
  this.exec = function () {
    // criar funções para fora quando a função for instanciada
    console.log('Exec....')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // usar o PONTO para acessar os atributos do objeto
console.log(obj3.nome)

obj3.exec()
