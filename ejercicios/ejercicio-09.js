

/*

Devuelva un algoritmo que devuelva un
array de objetos en base a pares 

*/


let pairs = [
    [1,{name: "Nicolas"}],
    [2,{name: "Felipe"}],
    [3,{name: "Chanchito"}],
];

let array = [{
    id: 1,
    name: 'Nicolas',
},{
    id:2,   
    name: 'Felipe',
},{
    id:3,
    name: 'Chanchito',

}];

function toColletion(arr){
let Colletion = [];  /// aqui se crea la array que contiene todas las arrays y elementos

for(let idx in arr){

    // idx es el indice que comienza por 0 

    let elemento = arr[idx]    // aqui obtenemos cada array 0,1,2,3,4
    Colletion[idx] = elemento[1]; 
    Colletion[idx].id = elemento[0];

}

return Colletion;

}

let resultado = toColletion(pairs);
console.log(resultado);