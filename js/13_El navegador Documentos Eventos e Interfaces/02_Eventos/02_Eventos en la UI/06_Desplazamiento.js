/*
1. Claridad
¿Qué es el evento scroll?

El evento scroll se dispara cada vez que cambia la posición de desplazamiento (scroll) de un elemento o de la página.

Por ejemplo, imagina una página muy larga.

┌──────────────────────────────┐
│ Header                       │
├──────────────────────────────┤
│                              │
│ Contenido                    │
│                              │
│                              │
│                              │
│                              │
│                              │
│                              │
│                              │
│                              │
└──────────────────────────────┘
Empiezas a bajar con la rueda del mouse.

↓

↓

↓

↓

↓


Cada pequeño movimiento genera:

scroll

↓

scroll

↓

scroll

↓

scroll

 
*/  

// ¿Dónde puede ocurrir?
// Puede ocurrir en: La ventana completa.
window.addEventListener("scroll", () => { 

});

// O dentro de un elemento.
/*
<div class="lista"></div>
*/

lista.addEventListener("scroll", () => {

})

// ============ 2. Entendimiento ============

// window.scrollY
console.log(window.scrollY); // ¿Cuántos píxeles ha bajado el usuario desde la parte superior de la página?


// window.scrollX Hace exactamente lo mismo, pero en horizontal.
console.log(window.scrollX);

// scrollTo() Permite mover la página automáticamente.
window.scrollTo(0, 500); // Signica ir 500px abajo

// scrollBy() En lugar de ir a una posición absoluta, se mueve una distancia relativa.
window.scrollBy(0, 300); // Significa: donde estoy bajar otros 300px mas 

// scrollIntoView() - Supongamos este HTML. <section id="contacto"></section>
/* Entonces.

document
.querySelector("#contacto")
.scrollIntoView();

La página baja automáticamente hasta esa sección.

Con animación.
element.scrollIntoView({

    behavior:"smooth"

});
*/

/*
window.scrollY	Saber cuánto ha bajado la página.
window.scrollX	Saber cuánto se desplazó horizontalmente.
window.scrollTo()	Ir a una posición específica.
window.scrollBy()	Desplazarse una distancia relativa.
element.scrollIntoView()	Llevar un elemento visible a la pantalla.
*/



