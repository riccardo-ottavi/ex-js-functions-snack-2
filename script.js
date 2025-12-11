//SNACK 1--------------

//funzioni anonime dichiarate prima dell'invocazione
const sumAnonima = (a, b) => {
    return a + b
}
const sumArrow = (a, b) => a + b

console.log(sum(3,5))
console.log(sumAnonima(30,50))
console.log(sumArrow(300,500))

function sum(a, b){
    return a + b
}


//SNACK 2--------------

const square = (n) => n * n

console.log(square(8))

//SNACK 3--------------
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

console.log(eseguiOperazione(3, 4, somma)); // 7
console.log(eseguiOperazione(3, 4, moltiplica)); // 12

function eseguiOperazione(a, b, callback){
    return callback(a,b)
}