function Aula(nome, videoID) {
  // função construtora
  this.nome = nome
  this.videoID = videoID
}

const a1 = new Aula('Bem Vindo', 123) // criando o objeto com a funçao construtora
const a2 = new Aula('Até Breve', 456)

console.log(a1, a2)

// simulando new

function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)
  return obj
}

const a3 = novo(Aula, 'Bem vindo', 123)
const a4 = novo(Aula, 'Até Breve', 456)
console.log(a3, a4)
