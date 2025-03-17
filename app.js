/*El principal objetivo de este desafío es 
fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. */

/* Descripción paso 1: Inicia declarando una variable de tipo array, 
que almacenará los nombres de los amigos ingresados. */

let listadoAmigos = [];


/* Descripción paso 2: Desarrolla una función, que permita al usuario 
ingresar un nombre en el campo de texto y añadirlo a la lista de amigos 
creada anteriormente. */


function agregarAmigo() {

    /* 1- Capturar el valor del campo de entrada: Utilizar document.getElementById o
document.querySelector para obtener el texto ingresado por el usuario. */

    let inputAmigo = document.querySelector("#amigo");  // Seleccionamos el elemento input en nuestro HTML por su id
    let nombre = inputAmigo.value.trim();  // El valor capturado por el usuario se guardara en la variable y eliminamos el espacio adicional
    // al inicio o al final.

    /* 2- Validar la entrada: Implementar una validación para asegurarse de que el campo
 no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, 
 inserte un nombre." */

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;  // Agregamos un if para validar si el valor agregado en el input es valido en caso de ser un vacio informar del error
    }

    /* 3- Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena
los nombre de amigos usando el método.push(). */

    listadoAmigos.push(nombre);  // Teniendo la variable nombre con el valor agregado se procede a usar el metodo
    // push  para agregar el nombre al array

    /* 4- Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena
los nombre de amigos usando el método.push(). */ 

    let listaAmigos = document.querySelector("#listaAmigos");  // Seleccionamos la lista de amigos en el HTML
    let li = document.createElement("li");  // Crearemos un nuevo elemento <li>
    li.textContent = nombre;  // Ponemos el nombre colocado por el usuario dentro del <li>
    listaAmigos.appendChild(li);  // Agregamos el como nodo hijo <li> a la lista

    /* 5- -Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de 
texto a una cadena vacía. */

inputAmigo.value = "";  // Se resetea - borra el valor del input o campo de entrada

}

/* Descripción paso 3: Crea una función que recorra el array amigos y agregue cada nombre como
 un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar
  nuevos elementos. */

function mostrarListaDeAmigos() {
    // 1. Dar con el elemento de la lista donde se van a mostrar los amigos
    let listaAmigos = document.querySelector("#listaAmigos");  // Usamos el metodo querySelector para seleccionar el elemento <ul> con el id - identificador de  "listaAmigos"
    
    // 2. Limpiar la lista existente
    listaAmigos.innerHTML = "";  // Usamos el metodo InnerHtml para ingresar un valor en este caso es "" vacio lo que limpia la lista para evitar duplicados al actualizarla con nuevos elementos

    // 3. Iterar sobre el array listadoAmigos mediante uso bucle for
    for (let i = 0; i < listadoAmigos.length; i++) {
        // 4. Crear un nuevo elemento <li> para cada amigo
        let li = `<li>${listadoAmigos[i]}</li>`;  // Cada amigo del array listadoAmigos se convierte en un <li> en formato de texto o string

        // 5. Agregar el nuevo <li> a la lista en HTML
        listaAmigos.innerHTML += li;  // Agregamos el <li> al final de la lista utilizando innerHTML. como se uso previamente pero en lugar de vacio es con el valor de li, Esto añade cada amigo a la lista
    }
}

/*  

Descripción paso 4: Crea una función que seleccione de manera aleatoria uno de los nombres almacenados en el array listadoAmigos. Usa Math.random()
 y Math.floor() para obtener un índice aleatorio. Luego, muestra el nombre seleccionado en un área de resultado en el HTML. */

// Paso 4: Función para seleccionar un amigo aleatorio de la lista

function sortearAmigo() {
    // 1. Primero validamos que haya nombres agregados y en caso contrario alertar
    if (listadoAmigos.length === 0) {  // Si el array listadoAmigos se encuentra vacio
        alert("¡No hay amigos para sortear! Agrega amigos primero.");  // Informamos al usuario que debe agregar primero nombres antes de continuar
        return;  // Salimos de la función si no hay amigos en la lista
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listadoAmigos.length);  // Generamos un índice aleatorio entre 0 y el largo del array

    // 3. Obtener el nombre sorteado
    let amigoSorteado = listadoAmigos[indiceAleatorio];  // declaramos la variable y usamso el acceso al array para obtener el amigo correspondiente

    // 4. Mostrar el resultado
    let resultado = document.querySelector("#resultado");  // guardamos el resultado en una nueva variavle y seleccionamos el área de resultado en el HTML
    resultado.innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;  // Mostramos el nombre sorteado por medio del innerHTML
}
