function divisao(dividendo, divisor) {
  let resultado = parseInt(dividendo / divisor)
  let resto = parseFloat(dividendo % divisor)
  console.log(`Resultado: ${resultado}`)
  console.log(`Resto: ${resto}`)
}

divisao(100, 8)
