const fabricantes = ['Chevrolet', 'Audi', 'Mercedes']
console.log(fabricantes)

function imprimirNomes(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimirNomes)
fabricantes.forEach(function (a) {
  console.log(a)
})
fabricantes.forEach(fabricantes => console.log(fabricantes))
