// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final
    
    // Validación: No se permite agregar un nombre vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Validación: Evita nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre); // Agrega el nombre a la lista
    actualizarLista(); // Actualiza la lista visualmente
    input.value = ""; // Limpia el input
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra la lista antes de actualizarla
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo; // Agrega el nombre a un elemento de lista
        
        // Crea un botón para eliminar el amigo de la lista
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar); // Añade el botón al elemento de la lista
        lista.appendChild(li); // Agrega el elemento a la lista en el HTML
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo de la lista según su índice
    actualizarLista(); // Actualiza la lista visualmente
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    // Validación: Se necesitan al menos 2 amigos
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para hacer el sorteo.");
        return;
    }
    
    // Validación: El número de amigos debe ser par
    if (amigos.length % 2 !== 0) {
        alert("El número de amigos debe ser par para realizar el sorteo.");
        return;
    }
    
    // Copia y mezcla la lista de amigos de forma aleatoria
    let mezclados = [...amigos];
    mezclados.sort(() => Math.random() - 0.5);
    
    let emparejamientos = [];
    
    // Crea las parejas de amigos secretos
    for (let i = 0; i < mezclados.length; i += 2) {
        emparejamientos.push(`${mezclados[i]} ➡️ ${mezclados[i + 1]}`);
    }
    
    mostrarResultados(emparejamientos); // Muestra los resultados
}

// Función para mostrar los resultados en pantalla
function mostrarResultados(parejas) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia la lista antes de actualizarla
    
    parejas.forEach((pareja) => {
        const li = document.createElement("li");
        li.textContent = pareja; // Agrega cada emparejamiento a un elemento de lista
        resultado.appendChild(li); // Muestra la lista en pantalla
    });
}
