let a = 1;
console.log(a)

let p = new Promise(function(CumprirPromessa){
    CumprirPromessa({
        x: 3,
        y: 4
    })
}) //criou-se um objeto para a necessidade de passar dois valores

p.then(valor => console.log(valor.x, valor.y)) //quando atingir o valor, essa função irá rolar

//---------------------------------------

function primeiroElemento(array){
    return array[2];
}

function primeiraLetra(string){
    return string[0];
}

const letraMinuscula = letra => letra.toLowerCase()

let f = new Promise(function(CumprirPromessa2){
    CumprirPromessa2(['Malu', 'Carlos', 'Davi', 'Júlia'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

