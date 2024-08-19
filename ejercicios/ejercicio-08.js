/*
crea algoritmo que tome un array de 
objetos y devuleva un array de pares

*/

let array = [{
    id: 1,
    name: 'Nicolas',
},{
    id: 2,
    name: 'Felipe',
},{
    id: 3,
    name: 'Juan',
}];

function toPairs(arr){
    let toPairs = [];
    for(idx in arr){
    let elemento = arr[idx];    
    toPairs[idx] = [elemento.id, elemento] 
}

return toPairs
}

let resultado = toPairs(array);
console.log(resultado);