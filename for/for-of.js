let animales = ['Chanchito feliz', 'Dragon', 'Perrito'];

for (let animal of animales){
    console.log(animal);
}

// con while


// let i = 0;

// while (i < animales.length) {
//     console.log(animales[i]);
//     i++;

// }



let array = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getMenorMayor(arr){

    let mayor = arr[0];
    let menor = arr[0];

for(numero of arr){
   
    mayor = mayor > numero ? mayor: numero;
    menor = menor < numero ? menor: numero;
 
}

return[menor,mayor];

}

let numeros = getMenorMayor(array);
console.log(numeros);
