//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function potencia(base, power) {
  base = parseInt(base)
  power = parseInt(power)
  let resultados = Math.pow(base, power).toFixed(2)
  return console.log(resultados)
}

potencia(4, 2)
potencia(7, 2)
