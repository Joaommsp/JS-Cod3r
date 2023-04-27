// ES8 Object.values e Object.entries
const obj = {
  a: 1,
  b: 2,
  c: 3
}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Bárbara'
const obj2 = {
  nome,
  idade: 5,
  ola() {
    return 'Olá'
  }
}
console.log(obj2.ola())

// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'au au'
  }
}

console.log(new Cachorro().falar())
