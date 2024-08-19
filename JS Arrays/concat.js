// METODOS PARA UNIR UN ARRAYS

const colores = ["Azul", "Verde", "Rojo", "Negro"];
const autos = ["auto1", "auto2", "auto3", "auto4"];

const are = [...colores, ...autos];
const arr = colores.concat(autos);
document.write(are);