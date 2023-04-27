const notas = [6.6, 6.8, 7.7, 7.9, 8.5, 9.0]

// sem callback

let notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenosQue7 = notas => notas > 7
const notasBaixas4 = notas.filter(notasMenosQue7)
console.log(notasBaixas4)
