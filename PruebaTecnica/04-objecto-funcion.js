/*Define un objeto llamado persona que tenga las siguientes propiedades: nombre, edad y 
un método saludar que imprima en consola: 
"Hola, mi nombre es [nombre] y tengo [edad] años".
*/

const persona = {
    nombre: "Alex",
    edad: 21,
    saludar: function() {
        console.log(`Hola, mi nombre es  ${this.nombre}  y tengo ${this.edad} años`)
    }

}


persona.saludar(); 