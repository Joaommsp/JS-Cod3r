// criação literal

const obj1 = {}
console.log(obj1)

// obeject em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object()

console.log(obj2)

// funções construtoras
function Produto(nome, preco, desconto) {
  this.nome = nome // torna a variável pública/ visível para fora do objeto
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
  }
}

const p1 = new Produto('Carro', 67000.0, 0.2)
const p2 = new Produto('Notebook', 5499.0, 0.15)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionário(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionário('João', 10000.0, 5)
const f2 = criarFuncionário('Pedro', 5000.0, 7)
console.log(f1.getSalario().toFixed(2))
console.log(f2.getSalario().toFixed(2))

// object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
