// replaza la primera palabra 
const replace = "Esto es un ejemplo profesional, esto es un ejemplo";
// const ret = replace.replace("ejemplo", "evento");


// replaza la primera palabra sin importar si son mayusculas o minusculas 
const ret = replace.replace(/ejeMplo/i, "evento");
// replaza todas las palabras sin importar si son mayusculas o minusculas 
const ret2 = replace.replace(/ejemPlo/gi, "evento");

document.write(ret);