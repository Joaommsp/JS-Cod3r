// cadeia de prototipo ( prototype chain )
Object.prototype.attr0 = 0 // não faça isso em casa!!!

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', teste: 5 }
const filho = { __proto__: pai, attr3: 'C', teste: 4 }
console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.teste)
console.log(filho.attr2)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velAtual
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  //__proto__: carro,
  modelo: 'F40',
  velMax: 324 // shadowing
}

const volvo = {
  // __proto__: carro,
  modelo: 'V40',
  status() {
    return `${this.modelo} : ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
