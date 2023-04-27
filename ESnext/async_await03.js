const { reject } = require("lodash")

function geradoDeNumeros(min, max, numerosProibidos) {
    if (min > max) {
      [min, max] = [max, min]
    }
    return new Promise((reject, resolve) => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator + min)
            if(numerosProibidos.includes(aleatorio)) {
                reject('Número repetido!!!')
            }
            else {
                resolve(aleatorio)
            }
    })
  }


  async function gerarMegaSenaq(qtdDeNumeros) {
    const numeros = []
    for(let _ of Array(10)) {
        numeros.push(await geradoDeNumeros(1,60, numeros))
    }
    return numeros
  }

  
  gerarMegaSenaq().then(console.log).catch(console.log)