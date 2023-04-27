const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
  if (x == 5) {
    break // o break não age sobre o if mas sim sobre o bloco for mais próximo
  }
  console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
  if (y == 5) {
    // interrompe o valor e vai para o próximo
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}

// break : desvio de fluxo para fora do laço
// continue: interrompe a repetição corrente e vai para a próxima repetição

// rótulo

externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) {
      break externo // se não colocar o rótulo o break vai agir sobre o for mais próximo apenas
    }
    console.log(`Par = ${a},${b} `)
  }
}

console.log('Fim')
