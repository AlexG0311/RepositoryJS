function Usuarios(){

    this.id = 1;
    this.recuperarClave = function(){
        console.log("Recuperando clave...");
    }
}

let usuario = new Usuarios();

console.log(usuario);