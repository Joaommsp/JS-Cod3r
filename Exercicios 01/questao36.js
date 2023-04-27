/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5. */

function vetorMultiplicado(vetor, muliplicador) {
  let vetorResultante = []
  if (muliplicador <= 5) {
    vetor.forEach(elemento => {
      vetorResultante.push(elemento * muliplicador)
    })
    return vetorResultante
  } else {
    vetor.forEach(elemento => {
      vetorResultante.push(elemento * muliplicador)
    })
    return vetorResultante
  }
}

let vetor1 = [1, 2, 3, 4, 5]

console.log(vetorMultiplicado(vetor1, 10))
