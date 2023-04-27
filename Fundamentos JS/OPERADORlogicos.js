function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTV50 = trabalho1 && trabalho2
  //const comprarTV32 = !!(trabalho1 ^ trabalho2) bitwise xor // A função XOR retornará VERDADEIRO se um número ímpar dos argumentos fornecidos for logicamente verdadeiro; caso contrário, retornará FALSO.
  const comprarTV32 = trabalho1 != trabalho2
  const saudavel = !comprarSorvete // operador unário
  return { comprarSorvete, comprarTV50, comprarTV32, saudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
