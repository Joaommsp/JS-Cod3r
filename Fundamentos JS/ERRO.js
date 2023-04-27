function tratarErroelancar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'mensagem de erro'
  throw {
    nome: erro.name,
    data: new Date(),
    msg: erro.msg
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!!')
  } catch (e) {
    tratarErroelancar(e)
  } finally {
    console.log('Final')
  }
}

const obj = { nome: 'João' }
imprimirNomeGritado(obj)
