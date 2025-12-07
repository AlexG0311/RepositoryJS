// Función que suma todos los números en un array
function sumarNumeros(array) {
    let suma = 0;

    for (const element of array) {
   suma = element + suma; 
    }
    
    // TODO: Recorre el array y suma cada número a la variable 'suma'
    // Pista: Usa un bucle para recorrer el array
    
    return suma;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
// TODO: Llama a la función sumarNumeros y almacena el resultado en la variable 'resultado'
let resultado = sumarNumeros(numeros);
console.log("La suma de los números es: " + resultado); // Debería imprimir "La suma de los números es: 15"
