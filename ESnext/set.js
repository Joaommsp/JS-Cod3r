// nao aceita repetição

const { set } = require('lodash')

// não tem índei
const times = new Set()

times.add('vasco')
times.add('palmeiras').add('flamengo').add('flu')
times.add('vasco')
console.log(times)

console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('flamengo'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
