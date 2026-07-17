/*
Una breve historia
Hagamos una pequeña descripción general para que comprenda la imagen general y el lugar de los Eventos de Puntero entre otros tipos de eventos.

Hace mucho tiempo, en el pasado, solo existían eventos de mouse.

Luego aparecieron los dispositivos táctiles, teléfonos y tablets en particular. Para que el código antiguo funcionara, generanban (y aún lo hacen) eventos de mouse. Por ejemplo, tocar la pantalla táctil genera mousedown. Así los dispositivos táctiles funcionaban bien con las páginas web.

Pero los dispositivos táctiles tienen más capacidades que un mouse. Por ejemplo, es posible tocar múltiples puntos al mismo (“multi-touch”). Los eventos del mouse no tienen las propiedades necesarias para manejar tal multi-touch.

Por lo tanto, se introdujeron eventos táctiles, como touchstart,touchend, touchmove, que tienen propiedades específicas de toque (no los cubrimos en detalle aquí, porque los eventos de puntero son aún mejores).

Aún así no fue suficiente, ya que hay muchos otros dispositivos, como los lápices, que tienen sus propias funciones. Y escribir código que escuchara ambos eventos, los táctiles y los del mouse, era engorroso.

Para resolver estos problemas, se introdujo el nuevo estándar: Pointer Events. Este proporciona un conjunto único de eventos para todo tipo de dispositivos señaladores.

Al momento la especificación Pointer Events Level 2 es soportada en todos los principales navegadores, mientras que Pointer Events Level 3 está en proceso y es mayormente compatible con Pointer Events level 2.

A menos que escribas código para navegadores viejos tales como Internet Explorer o Safari 12 y versiones anteriores, ya no tiene sentido usar eventos de mouse o táctiles: podemos pasar a eventos de puntero.

Así tu código funcionará tanto con mouse como con dispositivos táctiles.

Dicho esto, hay peculiaridades importantes, uno debe saber usarlas correctamente y evitar sorpresas adicionales. Les prestaremos atención en este artículo.
*/


/*
Tipos de eventos de puntero
Los eventos de puntero se llaman de forma similar a los eventos del mouse:

Evento de puntero	Evento de mouse similar
pointerdown	              mousedown
pointerup	                 mouseup
pointermove	              mousemove
pointerover	                mouseover
pointerout	                 mouseout
pointerenter	            mouseenter
pointerleave	           mouseleave
pointercancel	                   -
gotpointercapture	             -
lostpointercapture	             -



Estructura para recordar siempre:
Usa siempre eventos de puntero (pointerdown, pointermove) en lugar de eventos de mouse (mousedown, mousemove) para que tu web funcione perfectamente en móviles y computadoras.

Si vas a arrastrar cosas o crear lienzos de dibujo, agrega siempre touch-action: none; en tu CSS.

Usa setPointerCapture en el pointerdown para que el movimiento sea fluido y no sufra interrupciones si el usuario arrastra demasiado rápido.
*/


const caja = document.getElementById('mi-caja');

caja.addEventListener('pointerdown', (event) => {
  // 1. "Secuestramos" el puntero para que no se escape de la caja
  caja.setPointerCapture(event.pointerId);
  
  console.log("Puntero capturado!");
});

caja.addEventListener('pointermove', (event) => {
  // 2. Aunque el cursor se salga físicamente de la caja azul, 
  // este evento se seguirá disparando de forma segura aquí adentro.
  if (caja.hasPointerCapture(event.pointerId)) {
    console.log(`Moviendo en X: ${event.clientX}`);
  }
});

caja.addEventListener('pointerup', (event) => {
  // 3. Al soltar, liberamos el puntero (el navegador también lo hace por defecto)
  caja.releasePointerCapture(event.pointerId);
  console.log("Puntero liberado");
});

/*

4. El Concepto de "Pointer Capture" (Captura de Puntero)
Este es el concepto técnico más importante del artículo. Resolverá el típico bug donde el usuario arrastra el mouse muy rápido, se sale del elemento, y el movimiento se interrumpe.

Cuando un elemento ejecuta .setPointerCapture(pointerId), se vuelve "magnético": todos los eventos de movimiento de ese puntero específico serán redirigidos a él, incluso si el cursor se sale de la pantalla o se mueve por encima de otros elementos.

5. El Requisito Obligatorio: CSS touch-action
En dispositivos móviles, los navegadores tienen comportamientos por defecto muy agresivos (como deslizar la pantalla para hacer scroll o hacer doble clic para zoom).

Si intentas mover un objeto en un celular usando pointermove, el navegador se confundirá e intentará hacer scroll en la página. Para desactivar esto y dejar que tu JavaScript tome el control de los toques, debes aplicar esta regla en tu CSS al elemento arrastrable:

.elemento-tactil {
  Le dice al celular: "No hagas scroll ni zoom aquí, yo controlo los gestos desde JS" 
  touch-action: none; 
}
*/

/*
¿Qué son los Pointer Events?

Los Pointer Events son eventos que representan cualquier dispositivo que apunte a la pantalla.

Puede ser:

🖱 Mouse
👆 Dedo (pantalla táctil)
✏️ Lápiz digital (Stylus)

Todos generan los mismos eventos.

Antes hacías esto:

element.addEventListener("mousedown", ...);
element.addEventListener("touchstart", ...);

Ahora vasta con :  

element.addEventListener("pointerdown", ...);

*/

/*
¿Qué significa "Pointer"?

"Pointer" significa puntero.

No se refiere únicamente al cursor.

Se refiere al objeto que está interactuando con la pantalla.

Ejemplos:

Mouse
↓

Pointer

--------------

Dedo
↓

Pointer

--------------

Lápiz
↓

Pointer

JavaScript no necesita saber cuál es.

Solo sabe:

"Hay un puntero interactuando."


2. Entendimiento
Eventos principales
pointerdown

Ocurre cuando el puntero toca el elemento.

Equivale a:

mousedown

o

touchstart

Ejemplo:
*/
boton.addEventListener("pointerdown", () => {
    console.log("Comenzó la interacción");
});

/*
pointerup

Cuando se libera.

mousedown

↓

mouseup
*/
boton.addEventListener("pointerup", () => {
    console.log("Terminó");
});

// pointermove: Mientras el puntero se mueve.
document.addEventListener("pointermove", (event) => {

    console.log(event.clientX, event.clientY);

});

/*
pointerenter
Cuando el puntero entra al elemento.
Parecido a mouseenter

pointerleave
Cuando sale.
Parecido a mouseleave

pointerover
Cuando pasa por encima.
Hace bubbling.

pointerout
Cuando sale.
También hace bubbling.

clientX
Posición horizontal.

clientY
Posición vertical.

pointerId
Cada puntero tiene un ID.
Muy útil cuando existen varios dedos.

pointerType
Dice qué dispositivo fue.

*/

if(event.pointerType==="touch"){

console.log("Celular");

}












