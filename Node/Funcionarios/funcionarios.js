const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  let funcionariosChina = f => f.pais === 'China'

  let funcionariosFeminino = f => f.genero === 'F'

  let menorSalaio = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
  }
  console.log(
    funcionarios
      .filter(funcionariosChina)
      .filter(funcionariosFeminino)
      .reduce(menorSalaio)
  )
})

// id: 1,
//   nome: 'Feodor',
//   sobrenome: 'Pheby',
//   email: 'fpheby0@163.com',
//   genero: 'M',
//   cidade: 'Bal’shavik',
//   pais: 'Belarus',
//   empresa: 'Dabjam',
//   salario: 2401.69
