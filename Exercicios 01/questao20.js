/*​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function caixaEletronico(valor) {
  let notas = [100, 50, 10, 5, 1]
  let notasNecessarias = []
  let soma = 0

  for (var i = 0; i <= notas.length; i++) {
    if (valor / notas[i] >= 1) {
      valorCorredor = notas[i]
      notasNecessarias.push(valorCorredor)
    }
  }
  console.log(notasNecessarias)
  for (var i = 0; i < notasNecessarias.length; i++) {
    soma += notasNecessarias[i]
  }
  console.log(valor)
  console.log(soma)
  if ((soma = valor)) {
    return console.log(`Notas necessárias: ${notasNecessarias}`)
  }
}
caixaEletronico(20)
