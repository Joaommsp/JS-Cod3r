const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // removo o ultimo elemnto do Array
console.log(pilotos)

pilotos.push('Vestapen') //Adiciona um elemnto na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição [0]
console.log(pilotos)

// Splice pode remover e adcionar elemntos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Retorna um novo Array a partir do indice em ()
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 4) // o ultitmo indice não entra ??????????
console.log(algunsPilotos2)
