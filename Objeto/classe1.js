class Lancamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamento(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const Salario = new Lancamento('Salário', 45000)
const Contadeluz = new Lancamento('Conta de Luz', -2020)

const Contas = new CicloFinanceiro(6, 2018)
Contas.addLancamento(Salario, Contadeluz)
console.log(Contas.sumario())
