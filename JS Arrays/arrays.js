// definicion de arrays 

let animales = ['Vaca', 'Oveja', 'Cerdo', 'Perro', 'Gato'];
let person = ['Alex', 'Andres', 'Estuar'];



// Mostrar elemento de el arrays
console.log(animales[0]);

// agrega animales

animales[5] = "Iguana";

// para agregar un elemento a un array es mejor usar el metodo push
animales.push("Tortuga");

console.log(animales.length); // para ver la longitud del array

// unir arrays

const ob1 = [...animales, ...person];

console.log(ob1);


let arra = [2, 5, 7, 8, 4, -3, -2, -5];

function cuantosPositivos(arr){

    let sum = 0;

    for(let elemento of arr){

        if(elemento > 0){

            sum++;

        }
    }

    return sum;

}

let resultado = cuantosPositivos(arra);
console.log(resultado);



// metodo unshift agrega un elemento al array de primero

const cities = ["Madrid","Berlin","Tokio"];
cities.unshift("Rio");

// remover el ultimo elemento

const citiess = ["Madrid","Berlin","Tokio"];
cities.pop(); // remover Tokio

// remover el primer elemento

const citiesss = ["Madrid","Berlin","Tokio"];
cities.shift(); // remover Madrid



// METODOSSS

// ForEach
const ciudades = ["Cartagena", "Santa Marta", "Bogota", "Medellin"];
ciudades.forEach(function(val, i, arr) {

    document.write(i + ": " + val + "<br />");
});

