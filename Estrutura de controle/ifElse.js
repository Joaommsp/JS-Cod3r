function imprimirResultado(nota) {
  if (nota >= 7) {
    console.log(`APROVADO com nota ${nota}`)
  } else {
    console.log(`REPROVADO com nota ${nota}`)
  }
}

imprimirResultado(10.0)
imprimirResultado(4)
imprimirResultado('Epa') //por ser uma string e não um number, é false e imprime o bloco do ELSE , acontece por conta do JS ser fracamente tipado // Cuidado !!
