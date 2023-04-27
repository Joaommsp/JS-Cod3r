/* ​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores */

function calculadora(a, opr, b) {
  switch (opr) {
    case '+':
      return a + b
    case '-':
      if (a > b) {
        return a - b
      } else if (b > a) {
        return b - a
      } else {
        return 0
      }
    case 'x':
      return a * b
    case '/':
      return a % b
    default:
      return 'Operação Inválida'
  }
}

console.log(calculadora(5, '/', 5))
console.log(calculadora(5, 'cikjoi', 5))
