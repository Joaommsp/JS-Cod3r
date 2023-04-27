console.log(typeof Array, new Array(), typeof []) // array  é uma função

let aprovados = new Array('Bia', 'Carlos', 'Julia')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('joão')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)

// funcões importantes

aprovados.sort()
console.log(aprovados)

delete aprovados[1] // não muito viavel pois torna o elemento no indice === undefined
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // deletando a partir do indice 1 até o 1
console.log(aprovados) // deletando do 1 ao 2
aprovados.splice(1, 2)
console.log(aprovados)
aprovados.splice(1, 2, 'JOão', 'Pedro') // deletando e adicionando elementos
console.log(aprovados)
