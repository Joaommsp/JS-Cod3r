console.log('01)', '01' == 1) // o == é o símbolo relacional ou o próprio 'igual // compara apenas o valor e não o tipo
console.log('02)', '01' === 1) // siginifca "estritamente igual"
console.log('03)', '03' != 3) // != sinal de diferença
console.log('04)', 03 !== '3') // !== sinal de estritamente diferente

/* outros : 
 <
 <=
 >
 >=
 */

const d1 = new Date(0)
const d2 = new Date(0)
console.log('05)', d1 === d2) // comparando endereço de memória
console.log('06)', d1 == d2) // comparando endereço de memória

console.log('07', d1.getTime() == d2.getTime()) // comparando valor
console.log('08', d1.getTime() === d2.getTime()) // comparando valor

console.log('09)', undefined == null)
console.log('10)', undefined === null)
