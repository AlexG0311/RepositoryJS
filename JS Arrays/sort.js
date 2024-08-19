// El metodo sort sirve para ordernar un arrays alfabeticamente 

const fruit = ["Manzana", "Uva", "Piña", "Pera", "Banana",];

fruit.sort();

 document.getElementById("f").innerHTML = fruit;
// -------------------------------------------------------------------

const number = [5,3,4,1,2];

number.sort(function(a,b){
    return a - b;
});

document.getElementById("n").innerHTML = number;

// --------------TAMBIEN PUEDES SEPARAR LA FUNCTION--------------------

number.sort(compareFunction);
function compareFunction (a,b){

    return a - b;
}

// ----------------------------PUEDES COLOCAR DE MANERA DESC y ASC
// Y PODEMOS OBTENER EL PRIMER VALOR O ULTIMO------------------------------------

const num = [5,2,3,1];
num.sort(function (a,b){
    return b - a;
})

const lowest = num[0];

console.log(lowest);

// -------------------------PODEMOS ORDER UN OBJETO -----------------------

const studens = [{name: "Jhon", age: 7},
                 {name: "Monica", age: 5},
                 {name: "Paul", age: 6}

];

studens.sort(function(a,b){

    return a.age - b.age;
});

for (let i = 0; i< studens.length; i++){
    
    document.getElementById("demo").innerHTML += '<p>Name: ' + studens[i].name + '<br> Age: ' + studens[i].age + '</p>';
}


// METODO reverse(); 