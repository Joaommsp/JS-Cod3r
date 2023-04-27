const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'Local'
  minhaFuncao() // a função carrega o local de onde foi definido , entao ele porucrara o valor no escopo global onde foi definida
}

exec()
