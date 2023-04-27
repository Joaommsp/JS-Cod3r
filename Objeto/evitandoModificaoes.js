// evitando modificaçoes
// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // sem efeito
delete produto.tag // é possível excluir chaves , mas nao adiconar novas
console.log(produto)

// Object.seal
const pessoa = {
  nome: 'Juliana',
  idade: 27
}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome

pessoa.idade = 29

console.log(pessoa)

//Obeject.freeze = Selado + valores constantes
