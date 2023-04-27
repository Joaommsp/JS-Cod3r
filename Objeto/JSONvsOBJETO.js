const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  }
}

console.log(JSON.stringify(obj)) // convertando o objeto em JSON

//console.log(JSON.parse('{ a:1, b:2, c:3}'))
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // criando um objeto a partir de um texto (JSON)
console.log(
  JSON.parse('{ "Num":1, "Nome":"JOAO", "obj":{}, "Array":[], "Boolean": true}')
)
// https://jsonlint.com
