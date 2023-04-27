let nums = []

function montarVetor(n) {
  nums.push(n)
}

montarVetor(1)
montarVetor(2)
montarVetor(3)
montarVetor(4)
montarVetor(5)
montarVetor(6)
montarVetor(7)
montarVetor(8)
montarVetor(9)
montarVetor(10)
montarVetor(26)
montarVetor(29)
montarVetor(289)
montarVetor(262)
montarVetor(1983)

console.log(nums)

function numeros() {
  let contadorPar = 0
  let contadorImpar = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      contadorPar++
    } else {
      contadorImpar++
    }
  }
  return `Números pares: ${contadorPar} / Números ímpares: ${contadorImpar}`
}

console.log(numeros())
