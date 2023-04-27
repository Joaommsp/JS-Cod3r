/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function calcularMedia(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }
  let mediaAritimetica = soma / array.length
  return mediaAritimetica
}

array = [1, 2, 3, 4, 5]

console.log(calcularMedia(array))
