let personaje  = {
    nombre: "Alex",
    anime: "Dragon Ball",
    age: 21,
    
}

console.log(personaje); // asi podemos ver el objeto completo 
console.log(personaje.nombre); // asi podemos ver el nombre de la propiedad
console.log(personaje['anime']) ; // esta es otra forma de ver la propiedad

personaje.age = 14; // sirve para modificar la propiedad

let llave = 'nombre';

personaje[llave] = "Goku";

delete personaje.anime; // asi podemos elimimar una propiedad   

console.log(personaje);


/// OBJETO PERSONA

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    presentarse: function() {
        return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
    } 
};

// Probando el método presentarse


//  modificando propiedades 


persona.nombre = "Andres";
persona.edad = 25;
persona.ciudad = "Bogota";

console.log(persona.presentarse());


// iterar cada propiedad 
// objeto de telefonos 

let telefonos = {
    marca: "Samsung",
    modelo: "S22", 
    precio: 800
};


function mostrarP(objeto){

for(let i in objeto){
    console.log(objeto[i]);
}

}

mostrarP(telefonos);


// añadir y eliminar

persona.ocupacion = "Abogado";

console.log(persona);   

// eliminacion de la propiedad ocupacion

delete persona.ocupacion;

console.log(persona);

// clonar obj function 


function clonarObj(obj){
    let NewPersonaje = {}
    for(let personaje in obj){
        NewPersonaje[personaje] = obj[personaje];
    }

return NewPersonaje;

}

let resultado = clonarObj(personaje);
console.log(resultado);

// Objetos anidados presentar el dueño del auto

let coche = {

    marca: "AWM",
    modelo: "w-ew",
    año: 2009,

    propietatio : {
        nombre : "Alex",
        edad : 21,
        presentarse: function (){
            return `Hola mi nombre es ${this.nombre}, tengo una edad de, ${this.edad}`;
        }
    }

  

};

console.log(coche.propietatio.presentarse());


//  Combinar Objetos

let vaso = {
    color : "Azul",
    tamaño : 10,
    precio: 1000,


}

let moto = {
    nombre: "boxer",
    color: "blue",
    velocidad: "80km",
    ...vaso

}
console.log(moto);


// function objetos(obj1, obj2){
//     return { ...obj1, ...obj2 };

// }


// let mostrar = objetos(vaso,moto);
// console.log(mostrar);

/// otra manera usando el motodo assign 

const obj1 = Object.assign(moto,vaso);

console.log(obj1);

/// METODOS FREEZE AND SEAL

const ob1 = {

        name: "alex",
        edad: 12,

};

console.log(ob1);

Object.freeze(ob1);

ob1.name = "Andres";

console.log(ob1);


