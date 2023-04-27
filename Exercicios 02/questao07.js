/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e 
retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro 
inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo 
ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, 
portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.*/

function estarEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo == false) {
    if (numero > minimo && numero < maximo) {
      return true
    } else {
      return false
    }
  }
  if (inclusivo == true) {
    if (numero >= minimo && numero <= maximo) {
      return true
    } else {
      return false
    }
  }
}

console.log(estarEntre(3, 3, 150, true))
