const ferrari = {
  modelo: 'F40',
  vmax: 324
}

const volvo = {
  modelo: 'V40',
  vmax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}

console.log(typeof Object)
console.log(typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
