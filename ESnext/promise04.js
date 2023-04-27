function geradoDeNumeros(min, max, tempo) {
    if (min > max) {
      ;[min, max] = [max, min]
    }
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator + min)
            resolve(aleatorio)
        },tempo)
    })
  }
  
  function gerarVariosNumeros() {
    return Promise.all([
        geradoDeNumeros(10,50,5000),
        geradoDeNumeros(20,80,4000),
        geradoDeNumeros(5,30,1000),
        geradoDeNumeros(2,60,500)
    ])
  }

  console.time('cu')

  gerarVariosNumeros().then(numeros => console.log(numeros))
  .then(() => console.timeEnd('cu'))
  // o resultado só sai quando todas as promessas forem cumpridas