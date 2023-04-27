const fs = require('fs') // file system

const caminho = __dirname + '/arquivo.json'

// sincrono ...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrona
fs.readFile(caminho, 'utf-8', (errr, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host} , ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// ler pasta
fs.readdir(__dirname, (err, aquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(aquivos)
}) // ler o diretório atual "__dirname = direrório atual"
