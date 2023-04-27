Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{"nome":"Borracha","preco":3.50}',
  '{"nome":"caderno","preco":10.99}',
  '{"nome":"lapis","preco":1.99}',
  '{"nome":"caneta","preco":2.99}'
]

console.log(carrinho)
// retornar um array com apenas os preços

const paraObjeto = json => JSON.parse(json)
const precos = e => e.preco

const resultado = carrinho.map(paraObjeto).map2(precos)
console.log(resultado)
