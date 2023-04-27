function numerosNegativos(vetor) {
  let qtdNumeroNegativos = 0
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      qtdNumeroNegativos++
    }
  }
  return qtdNumeroNegativos
}

vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))
