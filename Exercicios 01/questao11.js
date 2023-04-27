function AnobissextoOuNao(ano) {
  for (i = 0; ano % 100 == 0; i++) {
    if (ano % 400 == 0) {
      return console.log(`O ano de ${ano} é bissexto`)
    } else {
      return console.log(`O ano de ${ano} NÃO é bissexto`)
    }
  }
  for (i = 0; ano % 100 != 0; i++) {
    if (ano % 4 == 0) {
      return console.log(`O ano de ${ano} é bissexto`)
    } else {
      return console.log(`O ano de ${ano} NÃO é bissexto`)
    }
  }
}

AnobissextoOuNao(1996)
