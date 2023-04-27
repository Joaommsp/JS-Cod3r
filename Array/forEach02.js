const meusCarros = ['Bravo', 'Lancer', 'Impreza wrx sti']

meusCarros.forEach(function (carro, indice) {
  console.log(`${indice + 1}) ${carro}`)
})

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Aghata', 'Arnaldo', 'João', 'Ana']

aprovados.forEach2(function (nome, indice, Array) {
  // dentro de um forEach há um laço for
  console.log(`${indice}) ${nome}`)
  console.log(Array)
})
