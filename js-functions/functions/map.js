const { arrayBuffer } = require("stream/consumers");

const nums = [2,4,6,8];
const dobro = (n,i, a) => n*2 + i + a.length // os parâmetros significam: o valor, o índice e o próprio array  
console.log(nums.map(dobro))

const nomes = ['Ana', 'Thomas', 'Malu', 'Felipe', 'Karla']
const primeiraLetra = texto => texto[0] //acessando a primeira letra
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

// exemplo maior, vindo de objeto
const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99},
    { nome: 'Impressora', qtd: 0, preco: 649.50},
    { nome: 'Caderno', qtd: 4, preco: 27.10},
    { nome: 'Lapis', qtd: 3, preco: 5.82},
    { nome: 'Tesoura', qtd: 1, preco: 19.20},
]
const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtd*item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

//implementando a própria versão do map.
 el = elemento. this = array. //colocará cada elemento do array no el 
Array.prototype.meuMap = function(fn){
    const mapped = []
    for(let i=0; i < this.length; i++){
        const result = fn(this[i], i, this)
        mapped.push(`===> ${result}`)
    }
    return mapped
}

//const getNome = item => item.nome
//console.log(carrinho.meuMap(getNome))

//const getTotal = item => item.qtd*item.preco
//const totais = carrinho.meuMap(getTotal)
//console.log(totais)