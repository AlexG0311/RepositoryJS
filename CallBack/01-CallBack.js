
array = ["Alex"];
                        //FUNCION
function Nombre (array, CallBack) {

array.push('Hugo');

CallBack()



}


Nombre(array, function () {

console.log(`Hola a todos mi nombre es ${array[1]}`)

})