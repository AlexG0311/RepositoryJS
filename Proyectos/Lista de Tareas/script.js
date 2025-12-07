document.addEventListener('DOMContentLoaded', () => {
    const listaTareas = document.getElementById('lista-tareas');
    const nuevaTareaInput = document.getElementById('nueva-tarea');
    const agregarTareaBtn = document.getElementById('agregar-tarea');

    const agregarTarea = () => {
        const tareaTexto = nuevaTareaInput.value.trim();
        if (tareaTexto !== '') {
            
            const tarea = document.createElement('li');tarea.textContent = tareaTexto; // propiedad que representa el texto dentro del elemento <li>

            const botonEliminar = document.createElement('span');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('delete');
            botonEliminar.addEventListener('click', () => {
                listaTareas.removeChild(tarea); 
                guardarTareas();
            });

            tarea.appendChild(botonEliminar);
            listaTareas.appendChild(tarea);

            nuevaTareaInput.value = '';
            guardarTareas();
        }
    };

    const guardarTareas = () => {
        const tareas = [];
        listaTareas.querySelectorAll('li').forEach(tarea => {
            tareas.push(tarea.firstChild.textContent);
        });
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    const cargarTareas = () => {
        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareas.forEach(tareaTexto => {
            const tarea = document.createElement('li');
            tarea.textContent = tareaTexto;

            const botonEliminar = document.createElement('span');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('delete');
            botonEliminar.addEventListener('click', () => {
                listaTareas.removeChild(tarea);
                guardarTareas();
            });

            tarea.appendChild(botonEliminar);
            listaTareas.appendChild(tarea);
        });
    };

    agregarTareaBtn.addEventListener('click', agregarTarea);
    nuevaTareaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    });

    cargarTareas();
});
