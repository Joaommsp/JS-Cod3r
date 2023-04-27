// console.log(global)

globalThis.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos os lugares'
  },
  description: 'App global disponível para todos'
})

// Object.freeze foi adicionado depois visando evitar q o arquivo global seja modificado
