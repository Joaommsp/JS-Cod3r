// novo recursoES 2015

const pessoa = {
  nome: 'Juliana',
  idade: 17,
  endereco: {
    rua: 'da Grécia',
    numero: 345
  }
}

const { nome, idade } = pessoa // as { } são o operador destructuring  // pensar no '=' como um "de" ou seja : tirar o nome e idade de pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const {
  endereco: { rua, numero, cep = '48.602-150' }
} = pessoa
console.log(rua, numero, cep)
