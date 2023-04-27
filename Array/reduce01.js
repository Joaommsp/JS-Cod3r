const alunos = [
  { nome: 'João', nota: 7.8, bolsista: true },
  { nome: 'Rafael', nota: 8.9, bolsista: false },
  { nome: 'Maria', nota: 7.2, bolsista: true },
  { nome: 'Ana', nota: 6.2, bolsista: false }
]

//console.log(alunos.map(a => a.nota))
/*console.log(
  alunos.map(function (nome, indice) {
    return `${indice + 1}) ${nome.nota}`
  })
)*/

const resultado = alunos
  .map(a => a.nota)
  .reduce(function (acumulador, valorAtual) {
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
  })

console.log(resultado)

// RESULTADO ANTERIOR + ELEMENTO ATUAL
