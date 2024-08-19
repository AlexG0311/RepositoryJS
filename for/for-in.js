// let user = [{

//     id: 1,
//     name: 'Chanchito Feliz',
//     age: 25,

// },{

//     id: 2,
//     name: 'Chanchito',
//     age: 35,

// }];

// for (let prop in user){
//     let elemento = user[prop];
//     console.log(elemento);
// }

// // let animales = ['Chanchito feliz', 'Dragon', 'Canguro'];

// // for(let indice in animales){
// //     console.log(indice, animales[indice]);
    
// // }


// // array de pares 

// let array = [{   
//     id: 1,
//     name: 'Nicolas',
// }, {
//     id: 2,
//     name: 'Felipe',
// },{
//     id: 3,
//     name: 'Chanchito',


// }];


// let pares = [
//     [1, {id: 1, name: "Nicolas"}],
//     [2, {id: 2, name: "Felipe"}],
//     [3, {id: 3, name: "Chanchito"}],
// ];


// function toPairs(arr){
    
//    let pairs = [];

//    for(idx in arr){
//     let elemento = arr[idx];

//     pairs[idx] = [elemento.id, elemento]
//    }

//    return pairs;

// }

// let resultados = toPairs(array);

// console.log(resultados);


// lo mismo al reves 
// let array = [{   
//     id: 1,
//     name: 'Nicolas',
// }, {
//     id: 2,
//     name: 'Felipe',
// },{
//     id: 3,
//     name: 'Chanchito',


// }];

// let pairs = [
//     [1, {name: "Nicolas"}],[2, {name: "Felipe"}],[3, {name: "Chanchito"}],
// ];


// function toCollection(arr){
    
//     let colletion = []

//     for(let idx in arr){
    
//     let elemento = arr[idx];

//     colletion[idx] = elemento[1];
//     colletion[idx].id = elemento[0];

//  }

//  return colletion;
// }
//  let resultados = toCollection(pairs);
 
//  console.log(resultados);

/* crear array de longitud N, y que sus elementos sean 
numeros de 1 hasta N

*/



let longitud = 7;

function crearArray(n){
    let arra = [];
    for(let i = 0;i < n; i++){
        

        arra[i] = i + 1;
    }
   return arra;

}

let resultado = crearArray(longitud);
console.log(resultado);