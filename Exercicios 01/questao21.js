/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function planoDeSaude(idade) {
  let valorFixo = 100
  let valorASerpago = calcularAdicional()
  function calcularAdicional() {
    if (idade < 10) {
      return valorFixo + 80
    } else if (idade >= 10 && idade <= 30) {
      return valorFixo + 50
    } else if (idade > 30 && idade <= 60) {
      return valorFixo + 95
    } else if (idade > 60) {
      return valorFixo + 130
    }
  }

  return console.log(
    `O valor a ser pago pelo plano é de ${valorASerpago.toLocaleString(
      'pt-br',
      {
        style: 'currency',
        currency: 'BRL'
      }
    )}`
  )
}

planoDeSaude(30)
planoDeSaude(5)
planoDeSaude(89)
planoDeSaude(54)
