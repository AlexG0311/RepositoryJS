
const cargarPeliculas = async () => {
    try{
    
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos);
    
    }catch(error){
        console.log(error);
    }
}


cargarPeliculas();