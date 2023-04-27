const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]()
funcs[6]()
funcs[8]()

// LET tem escopo de bloco , e var não tem , por  isso a função é lembrada
