
// COPIAR ARRAY

const array1 = [1,2,4,5,6];
const arrayCopia = [...array1];
console.log(arrayCopia)

// COMBINAR ARRAY 

const RealMadrid = ["Vinicius", "Mbappe", "Modric", "Rudriguer", "Curtois"];
const Barcelona = ["Lamine Yamal", "Lewandoski", "De Jone", "Pedri"]
const newTeam = [...RealMadrid,...Barcelona];

console.log(newTeam);

// PASAR ARGUMENTOS A FUNCIONES
const suma = [2,3,4,5,6]

function Sumar (...suma){

  const resultado = 2 * suma[2]; 

  return resultado

}

const ver = Sumar(...suma)

console.log(ver)

// COPIAR Y COMBINAR OBJETOS


const Datos1 = {nombre: "Alex", edad: 21}

const Datos2 = {apellido: "Gonzalez", CC: 1193118830}

const  persona = {...Datos1, ...Datos2} 

console.log(persona);

const Datos1Copy = {...Datos1}

console.log(Datos1Copy)


// Rest
let a,b,rest;
[a, b, ...rest] = [1,2,3,4,5,6];

console.log(a)
console.log(b)
console.log(rest)


const x = [1,2,3];

const [q, r] = x;

console.log(q)
console.log(r)

let p
[p,t,rest] = [2,3,4]

console.log(p)




const arr = [1,2,3,4];

[arr[1], arr[0]] = [arr[0], arr[1]];

console.log(arr);

/*
const arr1 = [1, 2, 3];
[arr1[2], arr1[1]] = [arr1[1], arr1[2]];
console.log(arr1); // [1,3,2]*/



          //  0, 1, 2,
const arr3 = [1, 2, 3, 4];

// Intercambiar los valores con destructuración
[arr3[0], arr3[3]] = [arr3[1], arr3[2]];

console.log(arr3);