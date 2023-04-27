// setTimeout(function () {
//   console.log('executando callback')

//   setTimeout(function () {
//     console.log('executando callback')
//     setTimeout(function () {
//       console.log('executando callback')
//     }, 2000)
//   }, 2000)
// }, 2000)

function esperarPorTempo(tempo = 2000) {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('Executando promise...')
      resolve()
    }, tempo)
  })
}

esperarPorTempo()
  .then(() => esperarPorTempo())
  .then(esperarPorTempo)
