/* Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumento(salario, plano) {
  let aumento_porcent = getplano(plano)
  let aumento = salario + salario * aumento_porcent

  function getSalario(salario) {
    console.log(`Seu salário atual é de ${salario}`)
  }

  function getplano(plano) {
    switch (plano) {
      case 'A':
        return 0.1
      case 'B':
        return 0.15
      case 'C':
        return 0.2
      default:
        console.log('Plano Inválido')
    }
  }
  getSalario(salario)
  if (plano != 'A' || plano != 'C' || plano != 'C') {
    return `Seu salário não foi alterado`
  } else {
    return `Seu novo salário é de ${aumento}`
  }
}

console.log(aumento(1000, 'A'))
console.log(aumento(1000, 'B'))
console.log(aumento(1200, 'C'))
console.log(aumento(1200, 'D'))
