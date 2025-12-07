//Crea una función llamada simularPeticion que simule una petición a un servidor. 
//Usa una Promise que se resuelva después de 2 segundos con el mensaje "Petición exitosa".

function simularPeticion() {
return new Promise((resolve) => {
    setTimeout(()=> { 
        resolve("Petición Exitosa")       
    }, 2000 );
});

}
simularPeticion().then((mensaje) => console.log(mensaje));
