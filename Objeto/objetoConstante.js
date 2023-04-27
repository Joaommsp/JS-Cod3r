// pessoa => 123(endereço de memoria) => {...}(dadso que podem ser alterados)

const pessoa = {
  nome: 'Pedro'
}
console.log(pessoa.nome)
pessoa.nome = 'joao'
console.log(pessoa.nome)

// pessoa => 456 => {...}
//pessoa = { nome: 'Ana' } // erro

Object.freeze(pessoa) // congelar o objeto , n pode mais ser alterado

pessoa.endereco = 'Rua do fogo'
delete pessoa.nome
pessoa.nome = 'Marcos'
console.log(pessoa)

const pessoaCostante = Object.freeze({ nome: 'Letícia' })
console.log(pessoaCostante)
