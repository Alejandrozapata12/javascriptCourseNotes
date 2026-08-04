// =================   1. Claridad   =================
/*
¿Qué explica este tema?

Explica cómo detectar que el contenido de un formulario ha cambiado.

Imagina este input:

<input type="text" id="nombre">

El usuario escribe:

A
Al
Ale
Alej
Aleja
Alejan
Alejandro

JavaScript puede reaccionar en diferentes momentos:

Mientras escribe.
Cuando termina de escribir.
Cuando pega texto.
Cuando corta texto.
Cuando copia texto.

Cada caso tiene un evento diferente.
*/

// =================   2. Entendimiento   =================

// ****************** input evento ******************
/*
Evento input

Es el evento más utilizado.

Se dispara cada vez que cambia el valor del campo.

No importa cómo cambió:

Escribiendo
Pegando
Cortando
Arrastrando texto
Autocompletado del navegador
Todo dispara input.
*/

/*
<input id="nombre">
 */

const input = document.querySelector("#nombre");

input.addEventListener("input", () => {

    console.log(input.value);

});



























