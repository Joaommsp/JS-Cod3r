function bhaskara(ax2, bx, c) {
  let delta = Math.pow(bx, 2) - 4 * (ax2 * c)

  if (delta > 0) {
    let calculo1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let calculo2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

    let resultado = [calculo1, calculo2]
    return console.log(resultado)
  } else {
    return console.log('DELTA negativo')
  }
}

bhaskara(9, 8, 9)
