const notas = [6.6, 7.6, 8.7, 9.8, 9.9]

for (i in notas) {
  // acessso pelo índice(i) e não pelo falor em si
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana',
  idade: 18,
  peso: 56,
  sexo: 'F'
}

for (let dados in pessoa) {
  // let pra n acessar fora do escopo
  console.log(`${dados} : ${pessoa[dados]}`)
}
