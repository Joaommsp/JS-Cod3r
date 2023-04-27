/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function boletin(nota1, nota2, nota3) {
  let pesoMaiorNota = 4
  let pesoPadrao = 3
  let pesoSoma = 10
  let media = calcularMedia()

  if (media >= 5) {
    return console.log(`APROVADO com média: ${media.toFixed(2)}`)
  }
  if (media < 5) {
    return console.log(`REPROVADO com média: ${media.toFixed(2)}`)
  }

  function calcularMedia() {
    if (nota1 > nota2 && nota1 > nota3) {
      mediaCalculada =
        (nota1 * pesoMaiorNota + nota2 * pesoPadrao + nota3 * pesoPadrao) /
        pesoSoma
      return mediaCalculada
    } else if (nota2 > nota1 && nota2 > nota3) {
      mediaCalculada =
        (nota2 * pesoMaiorNota + nota3 * pesoPadrao + nota1 * pesoPadrao) /
        pesoSoma
      return mediaCalculada
    } else if (nota3 > nota1 && nota3 > nota2) {
      mediaCalculada =
        (nota3 * pesoMaiorNota + nota1 * pesoPadrao + nota3 * pesoPadrao) /
        pesoSoma
      return mediaCalculada
    } else if ((nota1 = nota2 && nota1 == nota3)) {
      mediaCalculada =
        (nota1 * pesoMaiorNota + nota2 * pesoPadrao + nota3 * pesoPadrao) /
        pesoSoma
      return mediaCalculada
    }
  }
}

boletin(8, 9, 5)
