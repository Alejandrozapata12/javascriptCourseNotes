// Carga de recursos: onload y onerror

/*
Aquí aprenderás cómo saber si un recurso específico (imagen, script, CSS, iframe, etc.) cargó correctamente o falló.

Este tema es muy utilizado en aplicaciones reales para:

Mostrar una imagen de respaldo si una imagen falla.
Detectar si un script externo (Google Maps, Stripe, etc.) no cargó.
Esperar a que una imagen termine de cargarse antes de manipularla.
Mostrar mensajes de error cuando un recurso no está disponible.

 */

// ================== 1. Claridad ==================
/*
¿Qué son load y error?

Son eventos que pertenecen a elementos individuales, no a toda la página.

Por ejemplo:

<img src="foto.jpg">

Pueden ocurrir dos cosas.

Caso 1: Todo sale bien
Navegador

↓

Descarga foto.jpg

↓

Éxito

↓

load
Caso 2: La imagen no existe
Navegador

↓

Descarga foto.jpg

↓

404

↓

error

Así de simple.

load = el recurso se cargó correctamente.
error = el recurso no pudo cargarse.
*/

// ============== 2. Entendimiento ==============

// ******************** Evento load ********************
/*
Supongamos:

<img id="foto"
src="https://picsum.photos/400">

JavaScript.

const img = document.querySelector("#foto");

img.addEventListener("load", () => {

    console.log("Imagen cargada.");

});

Cuando termina de descargarse.

↓

Imagen cargada.
*/

// ******************** Evento error ********************
/*
Ahora:

<img
src="foto-que-no-existe.jpg">
img.addEventListener("error", () => {

    console.log("No se pudo cargar.");

});

Salida.

No se pudo cargar.
*/































































