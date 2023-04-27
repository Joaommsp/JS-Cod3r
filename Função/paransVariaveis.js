function soma() {
  let soma = 0
  for (i in arguments) {
    //O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.
    soma += arguments[i]
  }
  return soma
}

console.log(soma(1, 4))
console.log(soma(1))
console.log(3.2, 4.4, 'teste')
console.log('a', 'b', 'c')
