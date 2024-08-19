
function getbyIdx(arr, idx){

if (idx < 0 ||  idx >= arr.length ){
    return "Elemento no existente";
}

return arr[idx]; // aqui retorna el elemento del array 

}

let resultado = getbyIdx([1, 2], 2);
console.log(resultado);