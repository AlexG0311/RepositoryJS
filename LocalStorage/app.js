


function guardarLocalStorge(){


    let persona = {

    persona: "Fernando",
    edad: 31,
    correo: "Fernando@gmail.com",
    coords: {
        lat: 10,
        lng: -10

    }
    }

    let nombre = "Pedro";

    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Nombre",JSON.stringify(persona));


}
 //  guardarLocalStorge();


function obtenerLocalStorage(){

   let nombre = JSON.parse(localStorage.getItem("Nombre"));
    console.log(nombre)

}

obtenerLocalStorage();


