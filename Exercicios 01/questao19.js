/* ​19) ​O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente*/

function receberPedido(codigo, qtd) {
  function calculaPedido() {
    let precoDoPedido = valorDoproduto * qtd
    var precoDoPedidoFormatado = precoDoPedido.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    return `O pedido deu ${precoDoPedidoFormatado}`
  }
  switch (codigo) {
    case 100:
      valorDoproduto = 3.0
      console.log(calculaPedido())
      break
    case 200:
      valorDoproduto = 4.0
      console.log(calculaPedido())
      break
    case 300:
      valorDoproduto = 5.5
      console.log(calculaPedido())
      break
    case 400:
      valorDoproduto = 7.5
      console.log(calculaPedido())
      break
    case 500:
      valorDoproduto = 3.5
      console.log(calculaPedido())
      break
    case 600:
      valorDoproduto = 2.8
      console.log(calculaPedido())
      break
  }
}

receberPedido(100, 2)
receberPedido(200, 2)
receberPedido(500, 3)
