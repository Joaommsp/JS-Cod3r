function teste1(num) {
  if (num > 7) console.log(num) // é possivel executar um if sem abrir o bloco com "{}" se for em apenas uma linha de código( podem haver varios SENTENÇAS DE CÓDIGO se separadas por ';')
  console.log('Final') // irá executar independente da condição for true ou false
}

teste1(8)
teste1(6)

function teste2(num) {
  if (num > 7) {
    console.log(num)
  }
}

teste2(6)
teste2(9)
