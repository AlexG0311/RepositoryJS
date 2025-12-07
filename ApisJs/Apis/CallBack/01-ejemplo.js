function realizarTarea(callback) {
    console.log('Realizando una tarea...');
    setTimeout(function() {
      console.log('Tarea completada');
      callback();
    }, 2000);
  }
  
  function finalizar() {
    console.log('Finalizando proceso...');
  }
  
  realizarTarea(finalizar);
  // Salida:
  // Realizando una tarea...
  // (después de 2 segundos)
  // Tarea completada
  // Finalizando proceso...
  