/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function anuidade(mes, valorAnuidade) {
  let valorFinal = 0
  switch (mes) {
    case 1:
      valorFinal = valorAnuidade
      break
    case 2:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 1)
      break
    case 3:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 2)
      break
    case 4:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 3)
      break
    case 5:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 4)
      break
    case 6:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 5)
      break
    case 7:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 6)
      break
    case 8:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 7)
      break
    case 9:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 8)
      break
    case 10:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 9)
      break
    case 11:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 10)
      break
    case 12:
      valorFinal = valorAnuidade * Math.pow(1 + 0.05, 11)
      break
  }

  return console.log(
    `O valor a ser pago é de ${valorFinal.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })} `
  )
}

anuidade(4, 100)
