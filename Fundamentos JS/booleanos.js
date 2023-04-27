let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo) // ! = negação

console.log(!isAtivo)

console.log('Os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')

console.log(!!('' || 0 || ' ' || 123))
// || = ou
console.log('' || 0 || 'joao' || 123)

nome = 'João'

console.log(nome || 'Desconhecido')
