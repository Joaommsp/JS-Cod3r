//Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(typeof Math) //object

console.log(area)
console.log(area.toFixed(2))
