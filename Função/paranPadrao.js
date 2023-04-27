//Em JavaScript, um parâmetro tem seu valor padrão como undefined . Isso significa que se você não passar os argumentos ao chamar uma função, seus parâmetros terão undefined como seus valores padrão. Exemplo: A função say() usa o parâmetro message

// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1 // verdadeiro ou falso // undefined é false // ' se for falso , coloca o valor padrão(1)'
  c = c || 1
  return a + b + c
}

console.log(soma1())
console.log(soma1(3, 4, 6))

// estratédia 2 ,3 ,4 para gerar valor padrão

function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}

console.log(soma2(), soma2(3), soma2(2, 3, 4), soma2(0, 0, 0))

// valor padrão ES2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma3(), soma3(3), soma3(2, 3, 4), soma3(0, 0, 0))
