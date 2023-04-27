function reverse(valor) {
  if (typeof valor == 'boolean') {
    valor = valor != valor
    return valor
  } else if (typeof valor == 'number') {
    return -valor
  } else {
    return `Apenas valores booleanos numéricos são aceitos , este valor é do tipo ${typeof valor}`
  }
}

console.log(reverse('cuh'))
