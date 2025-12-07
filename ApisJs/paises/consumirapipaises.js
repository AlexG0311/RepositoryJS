var respuestaPaisesAPI;

function poblarDatosPaises() {
    var url = "https://restcountries.com/v3.1/independent?status=true";
    
    fetch(url)
       .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('Network response was not ok');
            }
            return respuesta.json();
        })
        .then(paises => {
            respuestaPaisesAPI = paises; // Guarda la respuesta de la API en una variable global
            adicionarDatosTablaPaises(paises);
            agregarElementosSelect(paises);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    function adicionarDatosTablaPaises(paises) {
        var tabla = document.getElementById("tablaPaises");
        // Deja la fila de encabezado intacta
        while (tabla.rows.length > 1) {
            tabla.deleteRow(1);
        }

        for (const pais of paises) {
            var fila = tabla.insertRow(-1);
            var colomnaNombre = fila.insertCell(0);
            var colomnaCapital = fila.insertCell(1);
            var colomnaRegion = fila.insertCell(2);
            var columnacurrencies = fila.insertCell(3);
            var colomnaBanderas = fila.insertCell(4);
            var colomnaPoblacion = fila.insertCell(5);
    
            colomnaNombre.innerHTML = pais.name.official;
            colomnaCapital.innerHTML = pais.capital ? pais.capital[0] : 'N/A';
            colomnaRegion.innerHTML = pais.region;
            columnacurrencies.innerHTML = obtenerNombresMonedas(pais.currencies);
            colomnaBanderas.innerHTML = pais.flags ? `<img src="${pais.flags.png}" alt="Bandera de ${pais.name.common}" width="50">` : 'N/A';
            colomnaPoblacion.innerHTML = pais.population ? pais.population.toLocaleString() : 'N/A';
        }
    }

    

    function  obtenerNombresMonedas(currencies) {
        if (!currencies) return 'N/A';
        const nombres = [];
        for (const codigoMoneda in currencies) {
            nombres.push(currencies[codigoMoneda].name);
        }
        return nombres.join(', ');
    }

    function agregarElementosSelect(paises) {
        var selectPaises = document.getElementById("selectPaises");
        selectPaises.innerHTML = ""; // Limpia el select antes de agregar nuevos elementos

        for (const pais of paises) {
            var option = document.createElement('option');
            option.textContent = pais.name.official;
            option.value = pais.name.official; // Añade el valor
            selectPaises.appendChild(option);
        }
    }
}
function mostrarDatosPaisSeleccionado(paisBuscar) {
    var tabla = document.getElementById("tablaPaises");

    // Deja la fila de encabezado intacta
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }

    for (const pais of respuestaPaisesAPI) {
        if (paisBuscar === pais.name.official) {
            var fila = tabla.insertRow(-1);
            var colomnaNombre = fila.insertCell(0);
            var colomnaCapital = fila.insertCell(1);
            var colomnaRegion = fila.insertCell(2);
            var columnacurrencies = fila.insertCell(3);
            var colomnaBanderas = fila.insertCell(4);
            var colomnaPoblacion = fila.insertCell(5);

            colomnaNombre.innerHTML = pais.name.official;
            colomnaCapital.innerHTML = pais.capital ? pais.capital[0] : 'N/A';
            colomnaRegion.innerHTML = pais.region;
            columnacurrencies.innerHTML = obtenerNombresMonedas(pais.currencies);
            colomnaBanderas.innerHTML = pais.flags ? `<img src="${pais.flags.png}" alt="Bandera de ${pais.name.official}" width="50">` : 'N/A';
            colomnaPoblacion.innerHTML = pais.population ? pais.population.toLocaleString() : 'N/A';
        }
    }
  
    function  obtenerNombresMonedas(currencies) {
        if (!currencies) return 'N/A';
        const nombres = [];
        for (const codigoMoneda in currencies) {
            nombres.push(currencies[codigoMoneda].name);
        }
        return nombres.join(', ');
    }
}
