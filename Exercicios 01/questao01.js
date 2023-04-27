function calcular(n1, n2) {
  let soma = n1 + n2
  let sub = n1 - n2
  let mult = n1 * n2
  let div = n1 / n2
  function resultados() {
    console.log(`soma: ${soma}`)
    console.log(`subtração: ${sub}`)
    console.log(`multiplocação: ${mult}`)
    console.log(`divisão: ${div}`)
  }
  return resultados()
}

calcular(10, 5)
console.log(' ')
calcular(5, 10)
