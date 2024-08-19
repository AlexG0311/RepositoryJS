

const link = "https://restcountries.com/v3.1/independent?status=true";

fetch(link)
.then(respuesta => {
if(!respuesta.ok){
    throw new Error('Network response was not ok');
}
return respuesta.json();
        
})
.then(dato =>{
    console.log(dato);
})




