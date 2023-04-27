const a = 1
const b = 2
const c = 3

const obj = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj, obj2)

const nomeAtributo = 'Nota'
const valorAtributo = 8.0

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = { [nomeAtributo]: valorAtributo }
console.log(obj4)

const obj5 = {
  funcao1: function () {
    //..
  },
  funcao2() {} // na versão atualizada nao é necessaário usar a palavra Reservada FUNCTION
}

console.log(obj5)
