function ran([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(ran([50, 40]))
console.log(ran([900])) // assumiu o valor q vem primeiro
console.log(ran([, 60])) // passando apenas o segundo valor
console.log(ran([])) // navegando entre 0 e 1000
//console.log(ran())  nao é possível ler propriedades de undefined
