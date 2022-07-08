//lendo arquivo e devolvendo por meio de uma função
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

console.log('Inicio...')
fs.readFile(caminho,exibirConteudo)
fs.readFile(caminho,(_,conteudo) => console.log(conteudo.toString()))
console.log('Fim...') //para mostrar que a função só é chamada depois da leitura do arquivo

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')