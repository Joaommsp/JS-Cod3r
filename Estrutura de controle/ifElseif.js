Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log('Tu é brabo')
  } else if (nota.entre(7, 8.99)) {
    console.log('Aprovado man')
  } else if (nota.entre(4, 6.99)) {
    console.log('Reprovado lixo')
  } else if (nota.entre(0, 3.99)) {
    console.log('podre mlk')
  } else {
    //opcional
    console.log('nota inválida')
  }

  console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)
