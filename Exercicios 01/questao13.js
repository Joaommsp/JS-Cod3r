function calendario(dia) {
  if (dia == 1 || dia == 8 || dia == 15 || dia == 22 || dia == 29) {
    switch (dia) {
      case dia:
        return console.log(`Dia ${dia} é Domingo `)
    }
  } else if (
    (dia >= 2 && dia <= 6) ||
    (dia >= 9 && dia <= 13) ||
    (dia >= 16 && dia <= 20) ||
    (dia >= 23 && dia <= 27) ||
    dia > 29
  ) {
    switch (dia) {
      case dia:
        return console.log(`Dia ${dia} é dia de semana`)
    }
  } else {
    switch (dia) {
      case dia:
        return console.log(`Dia ${dia} é Sábado Final de Semana`)
    }
  }
}

calendario(7)
calendario(27)
