function criarProduto(nome, preco) {
  return {
    nome: nome,
    preco: preco,
    desconto: (preco += -2)
  }
}

console.log(criarProduto('Banana', 5.0))

function criarProduto2(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto2('PC GAMER', 5000.0))
