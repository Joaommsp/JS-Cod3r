const pai = { nome: 'Pedro', corCabelo: 'Preto' }
const filha1 = Object.create(pai) // ja cria o objeto com o pai como prototype

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
})

filha2.nome = 'Carla' // n funciona pois writable = false

console.log(filha2.nome)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`)
}
