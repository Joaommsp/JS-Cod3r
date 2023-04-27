let valor // não inicializada // tem valor
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}

console.log(produto.preco) // indefinido o preço
console.log(produto)

produto.preco = 8599.0

console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
