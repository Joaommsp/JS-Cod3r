let p = new Promise(function (resolve) {
  resolve(3)
})

// console.log(typeof Promise)

p.then(valor => console.log(valor))
// .then()
// .then()
// .then()

let p1 = new Promise(data => {
  data(['Ana', 'Bia', 'Carla', 'Daniel'])
})

const primeiroElemento = array => {
  return array[0]
}

function primeiraLetra(string) {
  return string[0]
}

p1.then(primeiroElemento)
  .then(primeiraLetra)
  .then(letra => letra.toLowerCase())
  .then(console.log) // o then já vem com o valor
