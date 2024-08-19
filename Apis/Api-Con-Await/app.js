const cargarPeliculas = async () => {
try{

const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
console.log(respuesta);

const res = await respuesta.json();

console.log(res);


}catch{
    console.log("Hubo un error");
}


}
cargarPeliculas();










