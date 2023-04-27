const sequencia = {
  _valor: 1, // convenção
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    //this.valor = valor
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // ignorado pois é um valor menor
console.log(sequencia.valor)
