function falarDepoisDe(segundos, frases) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frases)
      reject('Deu ruim') // entre os () manda
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que legal fera!!')
  .then(frase => frase.concat('?!??'))
  .then(outraFrase => console.log(outraFrase)) // entre os () recebe
  .catch(e => console.log(e))
