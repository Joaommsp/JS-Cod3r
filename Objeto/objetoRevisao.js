// coleção dinâmica de pares chave/valor

const produto = new Object()
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

const carro = {
  nome: 'A4',
  valor: 90000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [
    {
      nome: 'Junior',
      idade: 19
    },
    {
      nome: 'Ana',
      idade: 35
    }
  ],
  calcularValorDoSeguro: function () {
    // ,...
  }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Europa'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.proprietario) // undefined porem sem erro
console.log(carro.condutores.length) // acessar de algo undefined gera um erro
