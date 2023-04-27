/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['joao', 'pedro', 'maria', 'ana']
let vetorDouble = [1.3, 4.6, 23.5, 15.8]

//let vetorFinal = vetorInteiro.concat(vetorString).concat(vetorDouble)
//console.log(vetorFinal)

function concatenar(...args) {
  let vetorFInal2 = []
  for (let i = 0; i < arguments.length; i++) {
    vetorFInal2 = vetorFInal2.concat(arguments[i])
  }
  return vetorFInal2
}

console.log(concatenar(vetorInteiro, vetorString, vetorDouble))
