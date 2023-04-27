//O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

// ============ revisando ================ //
let compras = ['maçã', 'banana', 'morango', 'abacaxi', 'batata doce', 'ovos']
console.log(compras.length)
console.log(compras)
console.log(compras[1]) // banana
compras[3] = 'carne' // trocando o abacaxi por carne
console.log(compras)
var ultimo = compras[compras.length - 1]
compras.push('Creatina', 'whey') // adicionando items
console.log(compras)
compras.pop() // n tem dinheiro pra whey kk
console.log(compras)
console.log(compras.indexOf('morango')) // saber o índice do item
// ============= Aula =================//
const valores = [7.8, 7.4, 7.5, 8.9]
console.log(valores[0], valores[3])
console.log(valores[4]) // js evita erros

valores[4] = 10
console.log(valores[4])
console.log(valores)

valores[10] = 10
console.log(valores)

console.log(valores.length) // mostra quantos elementos tem no array

valores.push({ id: 3 }, false, 'joao', null) // adiciona elementos no array
console.log(valores)

console.log(valores.pop()) // remove o ultimo item o array e exibe ele na tela

delete valores[0] // deleta o valor no indice desejado
console.log(valores)

console.log(typeof valores) // array é do tipo object

valores.push('fodalek')
console.log(valores)
