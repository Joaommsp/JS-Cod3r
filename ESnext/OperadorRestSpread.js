// operador ... rest(juntar) spread(espalhar)
// usar rest como parâmetro de uma função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 234243 }
const clone = { ativo: true, ...funcionario } //pegou os valores de funcionario e espalhou em um outro objeto
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Maria', 'Ana', 'Carla']
const grupoB = ['Pedro', ...grupoA, 'Rafaela']
console.log(grupoB)
