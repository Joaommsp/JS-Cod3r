function fix(valor) {
  valor = parseFloat(valor)
  console.log(`R$${valor.toFixed(2)}`)
}

fix(0.30000000000000004)
