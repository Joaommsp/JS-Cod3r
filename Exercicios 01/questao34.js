/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

function TrueOrFalse(string1, string2) {
  let string1_formatado = string1.toUpperCase()
  let string2_formatado = string2.toUpperCase()

  return console.log(string1_formatado.includes(string2_formatado))
  // o método includes() verifica se uma string esta contida em outra string
}

TrueOrFalse('abcdf', 'dcbaf')

function TrueOrFalse2(string1, string2) {
  let estaContido = true
  for (let i = 0; i < string1.length; i++) {
    let caractereString1 = string1.charAt(i).toUpperCase()
    for (let j = 0; j < string2.length; j++) {
      let caractereString2 = string2.charAt(j).toUpperCase()
      if (caractereString1 == caractereString2) {
        estaContido = true
        break
      } else {
        estaContido = false
      }
      if (!estaContido) {
        return estaContido
      }
    }
  }

  for (let i = 0; i < string2.length; i++) {
    let caractereString2 = string2.charAt(i).toUpperCase()
    for (let j = 0; j < string2.length; j++) {
      let caractereString1 = string1.charAt(j).toUpperCase()
      if (caractereString1 == caractereString2) {
        estaContido = true
        break
      } else {
        estaContido = false
      }
      if (!estaContido) {
        return estaContido
      }
    }
  }
}

console.log(TrueOrFalse2('joão mundo', 'Mundo'))
