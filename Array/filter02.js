Array.prototype.filter2 = function (callback) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 15000, fragil: true },
  { nome: 'Ipad', preco: 10000, fragil: true },
  { nome: 'Copo de vidro', preco: 12.99, fragil: true },
  { nome: 'Copo de plático', preco: 18.99, fragil: false }
]

console.log(
  produtos.filter2(function (p) {
    if (p.preco > 5000 && p.fragil == true) {
      return produtos
    }
  })
)

const produtoCaro = p => p.preco >= 5000
const produtoFragil = p => p.fragil

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))
