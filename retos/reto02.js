// Función que cuenta los números pares e impares en un array
function contarParesImpares(array) {
    let pares = 0;
    let impares = 0;
    
    // TODO: Recorre el array y cuenta cuántos números son pares e impares
    // Pista: Usa un condicional dentro del bucle para verificar si un número es par o impar
for (const element of array) {
    if(element%2 == 0){
        pares++;
    }
    else {
        impares++;
    }
}
    
    // Retorna un objeto con el conteo de pares e impares
    return {
        pares: pares,
        impares: impares
    };
}

// Ejemplo de uso
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// TODO: Llama a la función contarParesImpares y almacena el resultado en la variable 'conteo'
let conteo = contarParesImpares(numero);
console.log("Números pares: " + conteo.pares); // Debería imprimir "Números pares: 5"
console.log("Números impares: " + conteo.impares); // Debería imprimir "Números impares: 5"
