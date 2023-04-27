// let e const
{
  var a = 'a'
  let b = 'b'
  console.log(b)
}

console.log(a)

// template string
const ipad = 'ipad'
console.log(`${ipad} é caro`)

// Destructuring
const [l, e, ...tras] = 'cod3r'

console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { idade: 10, nome: 'Ana' }
console.log(i, nome)
