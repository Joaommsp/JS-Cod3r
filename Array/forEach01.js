const aprovados = ['Aghata', 'Arnaldo', 'João', 'Ana']

aprovados.forEach(function (nome, indice, Array) {
  // dentro de um forEach há um laço for
  console.log(`${indice + 1}) ${nome}`)
  console.log(Array)
})

aprovados.forEach(nome => console.log(nome))

const Exibiraprovados = (aprovados, indice) =>
  console.log(`${indice + 1}`, aprovados)

aprovados.forEach(Exibiraprovados)
