// 1) somar(3)(4)(5)
function somar(n1){
    return function(n2){
        return function(n3){
            return n1+n2+n3
        }
    }
}
let soma = somar(5)
let soma2 = soma(4)
console.log(soma2(3))

/* outra alternativa seria:
const somarAB = somar(3)(4)
console.log(somarAB(5)) 

ou:

console.log(somar(2)(3)(4))
*/


/* 2)   fn > multiplicar
        fn > adicionar
        fn > subtrair
        calcular(3)(7)(fn) 
*/

function Calculate(a){
    return function(b){
        return function(fn) {
            return fn(a, b)
        }
    }
}

function Sub(x,y){
    return x-y
}

function Adt(x,y){
    return x+y
}

function Mult(x,y){
    return x*y
}

const r1 = Calculate(10)(5)(Mult)
const r2 = Calculate(10)(5)(Adt)
const r3 = Calculate(10)(5)(Sub)
console.log(`Os números foram: 10 e 5, e o resultado de cada operação foi: Multiplicação: ${r1}, Adição: ${r2} e Subtração: ${r3}`)