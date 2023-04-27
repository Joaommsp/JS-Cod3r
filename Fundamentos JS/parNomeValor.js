// par nome/valor

const saudacao = 'Opa' // constexto léxico 1

function exec() {
  const saudacao = 'Falaa' // contexto léxico 2
  return saudacao
}

//objetos são grupos aninhado de pares nome/valor

const cliente = {
  nome: 'João',
  idade: 19,
  peso: 73,
  endereco: {
    rua: 'Da Grécia',
    numero: 592
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
