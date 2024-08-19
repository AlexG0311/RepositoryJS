const path = require('node:path'); // Corregido aquí

// Barra separadora de carpetas según SO
console.log(path.sep);
// operadores ternarios 
// (Condición) ? valor_si_verdadero : valor_si_falso
function cualEsmayor(a, b) {
    return (a > b) ? a : b;
}

let mayor = cualEsmayor(10, 5);

console.log(mayor);



