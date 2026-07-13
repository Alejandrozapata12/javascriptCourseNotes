// Delegación de eventos
/*
¿Qué es la delegación de eventos?

La delegación de eventos consiste en poner un solo addEventListener() en el elemento padre y dejar que el Event Bubbling lleve los eventos de los hijos hasta ese padre.

En lugar de hacer esto:

Botón 1 → addEventListener()
Botón 2 → addEventListener()
Botón 3 → addEventListener()
Botón 4 → addEventListener()
Botón 5 → addEventListener()

Haces esto:

Contenedor
    │
    ├── Botón 1
    ├── Botón 2
    ├── Botón 3
    ├── Botón 4
    └── Botón 5

Solo el contenedor tiene addEventListener()
Cuando haces clic en un botón, el evento burbujea hasta el contenedor, y desde allí puedes saber qué botón fue el que originó el clic usando event.target.

¿Por qué existe?

Imagina que tienes una tabla con 10.000 filas.

¿Harías esto?

fila1.addEventListener(...)
fila2.addEventListener(...)
fila3.addEventListener(...)
...
fila10000.addEventListener(...)

No.

Eso consume más memoria y hace el código más difícil de mantener.

Lo correcto es:

tabla.addEventListener("click", ...)

Un solo listener para toda la tabla.
 */

// Ejemplo sencillo 
/*
<ul id="menu">
    <li>Inicio</li>
    <li>Productos</li>
    <li>Contacto</li>
    <li>Acerca de</li>
</ul>
*/

const menu = document.getElementById("menu");
menu.addEventListener("click", (event) => {
    console.log(event.target.textContent);
})

// ================== EJEMPLO  ==================
const sidebar = document.querySelector("#sidebar");
const titulo = document.querySelector("#titulo");

// SOLO UN EVENT LISTENER
sidebar.addEventListener("click", (event) => {

    // Buscar el <li> más cercano
    const opcion = event.target.closest("li");

    // Si no se hizo clic sobre un <li>, salir
    if (!opcion) return;

    // Quitar active de todos
    document
        .querySelectorAll(".menu li")
        .forEach(li => li.classList.remove("active"));

    // Agregar active al seleccionado
    opcion.classList.add("active");

    // Obtener la página
    const pagina = opcion.dataset.page;

    // Cambiar el contenido
    titulo.textContent = pagina.toUpperCase();

    console.log("Abrir:", pagina);

});