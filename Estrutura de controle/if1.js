function soBoaNoticia(nota) {
  if (nota >= 7) {
    // retorna True ou False
    console.log(`Aprovado com nota ${nota}`)
  }
}

soBoaNoticia(8.1) // true
soBoaNoticia(6.9) // false

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdadade...' + valor)
  }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
