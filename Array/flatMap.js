const escola = [
  {
    nome: 'M1',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 8.1
      },
      {
        nome: 'Ana',
        nota: 9.3
      }
    ]
  },
  {
    nome: 'M2',
    alunos: [
      {
        nome: 'João',
        nota: 8.2
      },
      {
        nome: 'Roberto',
        nota: 7.4
      }
    ]
  }
]

const getNota = aluno => aluno.nota
const getNotasTumar = turma => turma.alunos.map(getNota)

const nota1 = escola.map(getNotasTumar)
console.log(nota1)

console.log([].concat([8.1, 9.3], [8.2, 7.4]))

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTumar)
console.log(notas2)
