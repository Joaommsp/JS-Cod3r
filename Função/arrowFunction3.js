let comparaComThis = function (parametro) {
  console.log(this === parametro)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = parametro => console.log(this === parametro)
comparaComThisArrow(global)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

// tentando entender saporra ..
//o This de uma função Arrow é associado ao contexto em quea a função foi escrita
