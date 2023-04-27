/*Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function pares(inicio, fim) {
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}

pares(1, 100)
