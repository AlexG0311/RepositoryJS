for(let i = 2; i < 10; i++){
    if(i % 2 == 0){

        console.log(i);
    }

}

// SUMAR LOS PRIMEROS NUMEROS NATURALES 
let sum = 0;
for(let i = 1; i<=5;i++){

    sum += i;

}  

console.log("La suma de los numeros son:", sum);

// TABLA DE MULTIPLICAR DEL 5

for(let i = 1; i <= 10; i++){

    tabla = 5 * i;

    console.log(5, 'x', i, '=', tabla);

}

// contar hacia atras del 10 hasta el 1
let suma = 0;
for(let i = 10; i >= 1;i--){
    
    suma+=i;

}
console.log("La suma es :", suma);

// imprimir elementos de un array

let nombres = ["Alex", "Sebas", "Andres", "Camilo", "Jorge"];

for(let i = 0; i < nombres.length; i++){

    console.log(nombres[i]);
}

// sumar los elementos de un array de numeros 

let numeros = [4, 76, 2, 33, 88, 61];
let sums = 0;
for(let i = 0; i < numeros.length; i++){
    
    sums+=numeros[i];
}

console.log("La suma de los numeros del array es:", sums);


// FACTORIAL DE UN NUMERO 
   
let n = 1;

for(let i = 5; i >= 1;i--){

n *=i;

}

console.log(n);

// SUMAR LOS DIGITOS DE UN NUMERO

let numero = 123;

let numeroString = numero.toString();
let sumar = 0;
for(let i = 0; i < numeroString.length; i++){
    
    sumar += parseInt(numeroString[i]);

 

}

console.log(sumar);

// HACER UN PATRON DE ASTERISCOS 

let asteriscos = "";

for(let i = 0; i <= 5;i++){
    asteriscos += "*";
    console.log(asteriscos);
}

////////////// CUAL ES EL MAYOR

let numer = [22, 400, 100, 32, 54];

let mayor = numer[0];


for(let i = 0; i < numer.length; i++){
    
    mayor = mayor > numer[i] ? mayor: numer[i];
 


}

console.log("El numero mayor es:", mayor);

///////////////

let numerr = [22, 400, 100, 32, 54];
let mayorr = numer[0];

for (let i = 0; i < numer.length; i++) {
    if (mayorr < numerr[i]) {
        mayorr = numerr[i];
    }
}

console.log("El número mayor es:", mayor);
///////////// NUMERO PRIMO

function verSiEsPrimo(numero){
 
    let esPrimo = true;
    if(numero <= 1){
        esPrimo = false;
    }
    for(let i = 2; i < numero;i++){
        if(numero % 2 == 0){
            esPrimo = false;
        }
    
        }
        return esPrimo;
        }


let resultado = verSiEsPrimo(2);
console.log(resultado);