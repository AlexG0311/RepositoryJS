let arrays = [1, 2, 3, 4, 5, 6, 7, 8];

function getMenorMayor(arr){   // parametrosss

    let mayor = arr[0];
    let menor = arr[0]; 

    for (numero of arr) {

        mayor = mayor > numero ? mayor  : numero;
        menor = menor < numero ? menor : numero;
        
    }

    return[mayor,menor];

}

let numeros = getMenorMayor(arrays); // argumentos..... 
console.log(numeros);