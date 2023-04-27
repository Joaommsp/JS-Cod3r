let contador = 1
contador = 0
while (contador <= 10) {
  console.log(`Contador = ${contador}`)
  contador++
}

for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`)
}

const notas = [5.5, 5.6, 6.6, 7.8, 9.0, 9.99]

for (let i = 0; i < notas.length; i++) {
  console.log(`Deu nisso: ${notas[i]}`)
}
//console.log(i) // n tem acesso fora do escopo por ser variavel com LET
