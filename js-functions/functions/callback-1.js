//função que pega os valores e devolve a execução de uma função
function exec(fn,a,b){
    return fn(a,b)
}

// funções arrow que estão executando o comando desejado separadamente
const somarNoTerminal = (x,y) => console.log(x+y)
const subtraiNoTerminal = (w,z) => console.log(w-z)

const subtrair = (x,y) => x-y

exec(somarNoTerminal, 20, 20)
exec(subtraiNoTerminal, 20, 20)

const r = exec(subtrair, 20, 10)
console.log(r)

// passando função como paramêtro p outra função e quando ocorrer um evento, a função é chamada. +setInterval = o código não para
const cb = () => console.log('Exec...')
setInterval(fn, 20)