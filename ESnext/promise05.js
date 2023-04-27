function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve,reject) => {
        try {
            con.log('deu ruim')
            if(Math.random() < chanceDeErro) {
            reject('EROOOOOO KJARAIOOO')
        }
        else {
            resolve(valor)
        }
        }
        catch(e) {
            reject(e)
        }
    }) 
}

funcionarOuNao('joao é o cara , não tem jeito',0.9).then(v => console.log(`valor: ${v}`))
.then(v => consol.log(v)
    // cu => console.log(`Erro espc:${cu}`)
)
.then(() => console.log('Quase fim'))
.catch(err => console.log(`Erro geral: ${err}`))
.then(() => console.log('Fim')) // tratamento de erro com catch
