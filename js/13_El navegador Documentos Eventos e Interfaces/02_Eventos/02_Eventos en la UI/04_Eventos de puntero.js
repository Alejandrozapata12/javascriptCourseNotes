/*
1. Claridad
¿Qué problema resolvieron los Pointer Events?

Antes de que existieran los Pointer Events, los desarrolladores tenían un gran problema.

Si querías hacer un componente que funcionara en PC y en celular, necesitabas escribir dos grupos de eventos.

Por ejemplo, un slider.

Para mouse:

slider.addEventListener("mousedown", iniciar);
slider.addEventListener("mousemove", mover);
slider.addEventListener("mouseup", terminar);

Para celulares:

slider.addEventListener("touchstart", iniciar);
slider.addEventListener("touchmove", mover);
slider.addEventListener("touchend", terminar);

Ya tienes el mismo código duplicado.

Ahora imagina agregar soporte para un lápiz digital (Stylus).

Tendrías un tercer grupo de eventos.
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

/*
La solución

Los navegadores dijeron:

"Vamos a crear una API que represente cualquier dispositivo que apunte a la pantalla."

Así nació Pointer Events.

Con ella solo escribes:

slider.addEventListener("pointerdown", iniciar);
slider.addEventListener("pointermove", mover);
slider.addEventListener("pointerup", terminar);

Y funciona con:

🖱 Mouse
👆 Dedo
✏️ Lápiz digital

¿Qué significa "Pointer"?

Pointer significa puntero.

No es el cursor.

Es cualquier dispositivo capaz de interactuar con la pantalla.

Puede ser:

Mouse

↓

Pointer

--------------

Dedo

↓

Pointer

--------------

Apple Pencil

↓

Pointer

Por eso el navegador ya no necesita saber qué dispositivo usas.
*/

// 2. Entendimiento. Los eventos principales


// ================ pointerdown - Ocurre cuando el puntero comienza la interacción. ================
card.addEventListener("pointerdown", () => {

    console.log("Inicio");

});

/*
Equivale a:

mousedown
o
touchstart
*/

// ================ pointermove - Mientras el puntero se mueve. ================
card.addEventListener("pointermove", () => {

    console.log("Moviendo");

});

/*
Muy usado en:

Drag & Drop
Juegos
Canvas
Firmas digitales
*/

// ================ pointerup - Cuando termina la interacción. ================
card.addEventListener("pointerup", () => {

    console.log("Fin");

});

/*
pointercancel

Este evento aparece mucho menos, pero es importante.

Sucede cuando el navegador cancela la interacción.

Por ejemplo:

Recibes una llamada en el celular.
Aparece un gesto del sistema operativo.
El navegador toma el control del evento.

En ese momento se dispara:

pointercancel

Es la forma de decirte:

"La interacción terminó de manera inesperada."

pointerover

Cuando el puntero entra a un elemento.

Hace bubbling.

pointerout

Cuando sale.

También hace bubbling.

pointerenter

Cuando entra al elemento.

No hace bubbling.

pointerleave

Cuando sale completamente.

No hace bubbling.

Son exactamente el equivalente moderno de:

mouseenter

mouseleave

pero compatibles con cualquier dispositivo.
*/

/*
El objeto PointerEvent

Todos los eventos reciben:

(event)

Pero no es un Event normal.

Es un:

PointerEvent

Tiene muchísimas propiedades.

clientX

Posición horizontal.

console.log(event.clientX);
clientY

Posición vertical.

console.log(event.clientY);
pointerId

Cada puntero tiene un identificador único.

Ejemplo.

Dos dedos.

Dedo izquierdo

↓

pointerId = 7

--------------

Dedo derecho

↓

pointerId = 12

Esto permite que el navegador sepa qué dedo se está moviendo.

pointerType

Muy importante.

console.log(event.pointerType);

Puede devolver:

mouse

touch

pen

Ejemplo.

if(event.pointerType==="touch"){

    console.log("Usuario desde celular");

}
pressure

Presión.

console.log(event.pressure);

Valores.

0

↓

No presiona

--------------

1

↓

Máxima presión

Muy útil para aplicaciones de dibujo.

width

Ancho del área de contacto.

height

Alto del área de contacto.

tiltX

Inclinación horizontal del lápiz.

tiltY

Inclinación vertical.

isPrimary

Si existen varios punteros.

¿Cuál es el principal?

Devuelve.

true

false
Captura del puntero

Este es probablemente el concepto más importante del artículo.

Existe:

element.setPointerCapture(event.pointerId);
*/



















