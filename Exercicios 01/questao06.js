/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.*/

function financa(c, j, t) {
  let capital_inicial = parseFloat(c)
  let juros = j / 100
  let tempo = parseInt(t)

  function calculo() {
    function juros_simples() {
      let resultado = capital_inicial * juros * tempo
      return console.log(resultado)
    }
    juros_simples()

    function juros_compostos() {
      let taxa_calculada = 1 + juros
      let resultado2 = capital_inicial * Math.pow(taxa_calculada, tempo)
      return console.log(resultado2.toFixed(2))
    }
    juros_compostos()
  }
  return calculo()
}

financa(100, 50, 12)
