function esperarPorTempo(tempo = 2000) {
    return new Promise(resolve => {
      setTimeout(() => resolve(),tempo)
    })
  }
  

  // esperarPorTempo(2000)
  // .then(() => console.log('Executanto promisse...'))
  // .then(esperarPorTempo)
  // .then(() => console.log('Executanto promisse...'))
  // .then(esperarPorTempo)
  // .then(() => console.log('Executanto promisse...'))

  function retornarValo(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(10)
      }, 5000);
    })
  }

  
 async function retornarValoRapido(){
    return 20
  }


  async function executar() {
    let valor = await retornarValoRapido()

     await esperarPorTempo()
    console.log(`Async/Await ${valor}....`)
     await esperarPorTempo()
    console.log(`Async/Await ${valor + 1}....`)
      await      esperarPorTempo()
    console.log(`Async/Await ${valor + 2}....`)
   
    return valor + 3
  }

async function executarDeVerdade() {
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()