console.log(soma(4, 5)) // functions declaration sao carregadas antes do codigo ser executado
// console.log(sub(4, 5)) // error!
// console.log(mult(5, 4)) // error!

// function declaration
function soma(x, y) {
  return x + y
}

// function expression
const sub = function (x, y) {
  return x - y
}

// named function expression

const mult = function mult(x, y) {
  return x * y
}
