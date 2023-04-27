
function primeiroEultimo(array) {
    let novoArray = []
    const primeiro = array[0]
    const ultimo = array[array.length - 1] 

    novoArray.push(primeiro)
    novoArray.push(ultimo)
    return console.log(novoArray)

}

primeiroEultimo([1,3,5,'fhhg'])