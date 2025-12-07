/*
Escribe una función llamada calcularFactorial que reciba 
un número y devuelva su factorial usando un ciclo for.
*/

function calcularFactorial(num) {
    let factorial = 1
    for (let i = num; i >= 1; i--) {
     factorial = factorial * i;
 
    }
    return factorial
 }
 console.log(calcularFactorial(5));
 
