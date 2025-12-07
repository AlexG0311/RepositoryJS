const cargarPeliculas = async () => {
    try {
      const respuesta = await fetch("./persona.json");
      console.log(respuesta);
  
      const res = await respuesta.json();
      console.log(res);
    } catch (error) {
      console.error("Error:", error); // Esto mostrará el error específico
      console.log("Hubo un error");
    }
  };
  
  cargarPeliculas();
  
  








