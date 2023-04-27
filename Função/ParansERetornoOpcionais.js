function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}`)
  } else {
    return area
  }
}

console.log(area(2, 2))
console.log(area(2)) // number * undefined = NaN
console.log(area())
console.log(area(2, 3, 4, 5, 1, 86, 283)) // executa apenas os 2 primeiros valores e ignora o restante sem gerar um erro
console.log(area(5, 5))
