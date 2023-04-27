const alunos = [
  { nome: 'João', nota: 7.98 },
  { nome: 'Maria', nota: 9.87 }
]

// imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo
const getnota = alunos => alunos.nota
const soma = (total, atual) => total + atual
let resultado = alunos.map(getnota).reduce(soma)
console.log(resultado / alunos.length)
// SE IMPORTA COM OQUE É FEITO , E NAO COMO É FEITO
