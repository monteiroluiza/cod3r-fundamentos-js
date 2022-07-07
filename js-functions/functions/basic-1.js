//function declaration
function goodMorning(){
    console.log('Good morning!')
};

goodMorning()

//function expression
const goodNight = function(){
    console.log('Good night!!')
};

goodNight()

let x = goodNight()
console.log(x) // undefined

//playing with functions and parameters
// se eu colocar um vlão padrão em algum dos parâmetros, caso  não se assuma nenhum valor, o código não dará erro. ex: b=0
function sum(a,b){
    return a+b
};

const result = sum(3,4)
console.log(result)

const result1 = sum(5,5,6)
console.log(result1)

const result2 = sum(6)
console.log(result2)

const result3 = sum()
console.log(result3)