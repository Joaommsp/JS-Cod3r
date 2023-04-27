{
  {
    {
      {
        var sera = 'Será???'
        console.log(sera) // variável fora de funçao
      }
    }
  }
}

console.log(sera) // é visível pois a variavel foi declarada fora de uma funcão

function teste() {
  var joao = 123 // variável definina que funciona destro da função apenas
  console.log(joao)
}

teste() //
//console.log(joao) não funciona pois a variavel esta dentro da função
