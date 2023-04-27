// exemplo de callback no Browser
document.getElementsByTagName('body')[0].onclick = function (e) {
  e = 'EVENTO'
  console.log(`O ${e} ocorreu`)
}
