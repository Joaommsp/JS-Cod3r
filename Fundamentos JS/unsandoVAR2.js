var numero = 1
{
  var numero = 2
  console.log('dentro =', numero)
}
console.log('fora =', numero)

// o var só tem dois ESCOPOS: global e na função , ou seja se forem declaradas variais iguais no mesmo escopo , haverá conflito/substituição de valores
