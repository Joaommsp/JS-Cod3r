const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavevariadas = new Map([
  [function () {}, 'função'],
  [{}, 'objeto'],
  [123, 'Numero']
])

chavevariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

console.log(chavevariadas.has(123))
chavevariadas.delete(123)
console.log(chavevariadas.has(123))
console.log(chavevariadas.size)
console.log()

chavevariadas.set(123, '2')
chavevariadas.set(123, '5')
chavevariadas.set(123312, '5')
console.log(chavevariadas)
