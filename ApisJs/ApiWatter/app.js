function llamadaApi() {
    const ciudad = document.getElementById("ciudad").value;
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=c11f98497cc8b8f901178ee5b6ce8c01`;

    fetch(URL_API)
        .then(res => res.json()) // Asegúrate de devolver res.json()
        .then(data => {const {main} = data
            console.log(main)
            // se asigna la temp al dom con innerHTML
            document.getElementById("temp").innerHTML = main.temp}                   
        )
        .catch(error => console.error("Error en la API:", error)); // Manejo de errores

       

}






