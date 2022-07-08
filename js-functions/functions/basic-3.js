// arrow function === anonymous
const felizNatal = () => console.log('Feliz Natal!!')
felizNatal()

const saudacao = nome => "Fala " + nome + ". Tudo show?!!!" // ou: `Fala ${nome}. Tudo show?!!!`
console.log(saudacao('thomas'))

const somar = (...nums) => {    // ou function(nums){...} + os "..." jogam todos os parâmetros dentro de um array
    let total = 0
    for(let n of nums){
        total+=n
    }
    return total
};

console.log(somar(2,2,2,2,2,2))

/* transformando em função arrow, microdesafio!!

function potencia(base){
    return function(exp){
        return Math.pow(base,ex)
    }
}
*/
const potencia = base => exp => Math.pow(base,exp)
console.log(potencia(2)(8))

// this:
Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}
Array.prototype.primeiro = function(){
    console.log(this[0])
}

const numeros = [2,4,6]
numeros.ultimo()
numeros.primeiro()