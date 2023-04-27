let a = 3

global.b = 123
this.c = 456
this.d = 'suave'
this.e = 0777

console.log(typeof global)

console.log(this.a)
console.log(global.a)

console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variável maluca sem var ou let
abc = 3 // n faç aisso em casa
console.log(global.abc)

// module.exports { e: 456 , f:'joao', g: true}
