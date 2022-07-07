//function expression
const goodMorning = function(){
    console.log('Good morning!')
};
const goodNight = function(){
    console.log('Good night!!')
};

//functional functions, passing a function like a parameters to another function
function executarQualquerCoisa(fn){
    if (typeof fn == 'function'){
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(goodMorning);
executarQualquerCoisa(goodNight); 

// 2) return function by another function

function Power(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

let potenciaDe2 = Power(2)
console.log(potenciaDe2(8))