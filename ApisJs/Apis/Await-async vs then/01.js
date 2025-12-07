

fetch("https://jsonplaceholder.typicode.com/users")
.then(respuesta => {


    if (!respuesta.ok) {
        throw new Error('Network response was not ok');
    }
    return respuesta.json();

})
.then(paises => {

    console.log(paises);




}
)