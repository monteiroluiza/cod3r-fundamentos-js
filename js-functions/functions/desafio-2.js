const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99, fragil: true},
    { nome: 'Impressora', qtd: 1, preco: 649.50, fragil: true},
    { nome: 'Caderno', qtd: 4, preco: 27.10, fragil: false},
    { nome: 'Lapis', qtd: 3, preco: 5.82, fragil: false},
    { nome: 'Tesoura', qtd: 1, preco: 19.20, fragil: true},
]

/* filter, map, reduce

1. fragil: true
2. qtd: 4, preco: 27.10 -> total
3. media dos totais
*/

const isFragil = item => item.fragil
const getTotal = item => item.qtd * item.preco
const getMedia = (acc, el) => {
    const novaQtd = acc.qtd +1
    const novoTotal = acc.total+el
    return{
        qtd:novaQtd, 
        total: novoTotal, 
        media: novoTotal/novaQtd
    }
}

const mediaInicial = {qtd: 0, total: 0, media: 0}

const media = carrinho
    .filter(isFragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media

console.log(media)