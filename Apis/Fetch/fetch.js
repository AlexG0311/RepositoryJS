

let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(response => response.json())
.then(data => mostrarDatos(data))
.catch(error => console.log(error))

const mostrarDatos = (data) => {
    console.log(data)
    let body = ' '

    for(var i = 0; i < data.length; i++){
         body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }

    document.getElementById('data').innerHTML = body;
}