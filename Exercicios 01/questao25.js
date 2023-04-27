/*Escrever um programa para exibir os números de 1 até 50 na tela. */

function numeros(inicio, fim) {
  for (let i = inicio; i <= fim; i++) {
    console.log(`${i}: ${i}`)
  }
}

numeros(1, 50)
