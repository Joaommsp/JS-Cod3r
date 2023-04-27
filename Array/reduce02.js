const alunos = [
  { nome: 'João', nota: 7.8, bolsista: false },
  { nome: 'Rafael', nota: 8.9, bolsista: false },
  { nome: 'Maria', nota: 7.2, bolsista: true },
  { nome: 'Ana', nota: 6.2, bolsista: false }
]

// todos os alunos são bolsistas ??
const bolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsistas))

// algum aluno é bolsista
const algumBolsista = (resultado, bolsistas) => resultado || bolsistas
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
