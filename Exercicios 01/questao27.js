/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function crescimento(altura1, crescimento1, altura2, crescimento2) {
  let alturaCrianca1 = 0
  let alturaCrianca2 = 0
  let tempo = 0
  function crescimentoAnual() {
    if (
      (altura1 > altura2 && crescimento1 > crescimento2) ||
      (altura2 > altura1 && crescimento2 > crescimento1)
    ) {
      return console.log(`A criança menor não ultrapassará a criança maior`)
    } else if (altura1 > altura2 && crescimento2 > crescimento1) {
      for (var i = 0; alturaCrianca2 <= alturaCrianca1; i++) {
        alturaCrianca2 = altura2 + crescimento2 * i
        alturaCrianca1 = altura1 + crescimento1 * i
        tempo = i
        console.log(alturaCrianca1, alturaCrianca2, tempo)
      }
    } else if (altura2 > altura1 && crescimento1 > crescimento2) {
      for (var i = 0; alturaCrianca1 <= alturaCrianca2; i++) {
        alturaCrianca1 = altura1 + crescimento1 * i
        alturaCrianca2 = altura2 + crescimento2 * i
        tempo = i
        console.log(alturaCrianca1, alturaCrianca2, tempo)
      }
    }
    console.log(
      `A criança mais baixa ultrapassará a criança mais alta em ${tempo} anos`
    )
  }
  crescimentoAnual()
}

crescimento(120, 3, 100, 5)
