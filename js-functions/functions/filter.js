const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99},
    { nome: 'Impressora', qtd: 0, preco: 649.50},
    { nome: 'Caderno', qtd: 4, preco: 27.10},
    { nome: 'Lapis', qtd: 3, preco: 5.82},
    { nome: 'Tesoura', qtd: 1, preco: 19.20},
]

const getNome = item => item.nome
const qtdMaiorQueZero = item => item.qtd > 0
//const qtdMaiorIgualAZero = item => item.qtd>= 0
//const qtdMuitoGrande = item => item.qtd >= 1000

const itensValidos = carrinho
    .filter(qtdMaiorQueZero)
    .map(getNome)

console.log(itensValidos)

//implementando a própria versão do filter
Array.prototype.meuFilter = function(fn){
    const novoArray = []
    
    for(let i=0; i<this.length; i++){
        if (fn(this[i], i, this)){
            novoArray.push(this[i])
        } 
    }

    return novoArray
}

const itensvalidos2 = carrinho
    .meuFilter(qtdMaiorQueZero)
    .map(getNome)

console.log(itensvalidos2)