const resultado = nota => (nota >= 7 ? 'Aprovado' : 'Reprovado') // 3 partes / aqui fica a resposta que retorna do operador ternário

const resultado2 = nota => {
  return nota >= 7 ? 'Aprovado' : 'Reprovado' //aqui fica a resposta que retorna do operador ternário
} // 3 partes

console.log(resultado(7.1))
console.log(resultado(6.7))

console.log(resultado2(8.6))
