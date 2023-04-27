function revomerPropriedade( object , propriedade) {
    let objtoRecebido = object
    let propriedadeRecebida = propriedade

    Object.defineProperty(objtoRecebido,pro)

    return(
    console.log(objtoRecebido),
    console.log(propriedadeRecebida),
    console.log(objtoRecebido.propriedadeRecebida))
}

revomerPropriedade({a:1,b:3},"b")


Object.defineProperty(pessoa, 'dataDeNascimento', {
    value: '01/01/2019',
    enumerable: true,
    writable: false
  })