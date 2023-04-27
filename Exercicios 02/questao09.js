function repeticoes(numero, repeticoes) {
  let array = []
  for (let i = 0; i < repeticoes; i++) {
    array.push(numero)
  }
  return array
}

console.log(repeticoes(7, 10))
