const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // não é possível dar quebras de linha etc
console.log(concatenacao)

const template = `
  Olá
  ${nome} 
  !
` // interpolação
console.log(template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // funcao arrow

console.log(`Ei...${up('cuidado')} !`)

function bio() {
  nome2 = 'joão'
  idade2 = 19
  meta2 = 'Programador Front End'
  return console.log(
    `Meu nome é ${nome2} tenho ${idade2} anos e minha meta atual é ser ${meta2} e com shape fodaa`
  )
}

bio()
