function real(partes, ...valores) {
  const resultados = []
  valores.forEach((valor, indices) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultados.push(partes[indices], valor)
  })
  return resultados.join('')
}

const preco = 11.89
const precoParcela = 25
console.log(real`1s de ${preco} ou 3x de ${precoParcela} `)
