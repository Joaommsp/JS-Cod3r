function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

do {
  // com o 'do' a repetição é executada pelo menos 1 vez , depois o teste e feito até chegar no valor condicional
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`A opção escolhida foi : ${opcao}`)
} while (opcao != -1)
