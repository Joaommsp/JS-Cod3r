const pessoa = {
  nome: 'Rebeca',
  idade: 19,
  peso: 49
}

console.log(Object.keys(pessoa)) // imprime apenas as chaves do objeto em ( )
console.log(Object.values(pessoa)) // imprime apenas os valores do obejto em( )
console.log(Object.entries(pessoa)) // imprime os registros do objeto em ( )

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]} : ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
  value: '01/01/2019',
  enumerable: true,
  writable: false
})

pessoa.dataDeNascimento = '01/01/2117'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ES 2015)
/*O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.*/

const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj_final = Object.assign(destino, o1, o2)
console.log(obj_final)

Object.freeze(obj_final)
obj_final.c = 1234
console.log(obj_final) // n muda nada pois o objeto está congelado
