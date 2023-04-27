/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , 
bem como a soma dos elementos*/

function aritmetica(n, a1, r) {
  let termos = []

  let nTermos = a1 + (n - 1) * r
  for (let i = 1; i <= n; i++) {
    termos.push(a1 + (i - 1) * r)
  }

  let somaTermos = ((a1 + nTermos) * n) / 2

  return console.log(
    `Termos da PA: ${termos} / Soma dos Termos da PA: ${somaTermos}`
  )
}

function geometrica(n, a1, q) {
  let termos = []
  let somaTermos = 0
  let nTermos = a1 * Math.pow(q, n - 1)
  for (let i = 1; i <= n; i++) {
    termos.push(a1 * Math.pow(q, i - 1))
    somaTermos += (a1 * (Math.pow(q, i) - 1)) / q - 1
  }

  return console.log(
    `Termos da PG: ${termos} / Soma dos Termos da PG: ${somaTermos}`
  )
}

aritmetica(10, 10, 15)
geometrica(10, 5, 3)
