// Acciones predeterminadas del navegador

/*
Muchos eventos conducen automáticamente a determinadas acciones realizadas por el navegador.

Por ejemplo:

Un clic en un enlace: inicia la navegación a su URL.
Un clic en el botón de envío de un formulario inicia su envío al servidor.
Al presionar un botón del ratón sobre un texto y moverlo, se selecciona el texto.
Si manejamos un evento en JavaScript, es posible que no queramos que suceda la acción correspondiente del navegador e implementar en cambio otro comportamiento.

Hay muchas acciones predeterminadas del navegador:

mousedown – inicia la selección (mueva el ratón para seleccionar).
click en <input type="checkbox"> – marca/desmarca el input.
submit – dar clic en <input type="submit"> o presionar Enter dentro de un campo de formulario hace que suceda este evento y el navegador envía el formulario a continuación.
keydown – presionar una tecla puede llevar a agregar un carácter a un campo u otras acciones.
contextmenu – el evento ocurre con un clic derecho, la acción es mostrar el menú contextual del navegador.
…hay mas…
Todas las acciones predeterminadas se pueden evitar si queremos manejar el evento exclusivamente mediante JavaScript.

Para evitar una acción predeterminada, utiliza event.preventDefault() o return false. El segundo método funciona solo para los controladores asignados con on<event>.

La opción passive: true de addEventListener le dice al navegador que la acción no se evitará. Eso es útil para algunos eventos móviles, como touchstart y touchmove, para decirle al navegador que no debe esperar a que todos los controladores terminen antes de desplazarse.

Si se evitó la acción predeterminada, el valor de event.defaultPrevented se convierte en true, de lo contrario, es false.
*/


// Obtener elementos
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");

// Escuchar el envío del formulario
formulario.addEventListener("submit", (event) => {

    console.log("Se disparó el evento submit");

    // Evitar que el navegador recargue la página
    event.preventDefault();

    // Obtener el texto
    const texto = input.value.trim();

    // Validar
    if (texto === "") {

        alert("Debe escribir una tarea");

        return;
    }

    // Crear un nuevo <li>
    const li = document.createElement("li");

    li.textContent = texto;

    // Agregar al DOM
    lista.append(li);

    // Limpiar el input
    input.value = "";

    // Enfocar nuevamente el input
    input.focus();

});

/*
Click en "Agregar"

↓

Se dispara submit

↓

JavaScript ejecuta preventDefault()

↓

NO se recarga la página

↓

Se valida el input

↓

Se crea el <li>

↓

Se agrega la tarea
*/







































