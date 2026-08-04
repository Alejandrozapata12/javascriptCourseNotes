// Moviendo el mouse: mouseover/out, mouseenter/leave

/*
Eventos mouseover/mouseout, relatedTarget
El evento mouseover se produce cuando el cursor del mouse aparece sobre un elemento y mouseout cuando se va.

A. El movimiento continuo
mousemove: Se dispara sin parar, cada vez que el mouse se mueve aunque sea un solo píxel dentro del elemento. Es genial seguir el cursor, pero ten cuidado: ¡puede ejecutarse cientos de veces por segundo!


B. El bando con Bubbling: mouseoverymouseout
Estos dos eventos son muy particulares porque tienen burbujeo (propagación) . Esto significa que si entras a un hijo, el evento "sube" al padre.

mouseover: Se dispara cuando el puntero entra a un elemento... O cuando entra a cualquiera de sus elementos hijos .

mouseout: Se dispara cuando el puntero sale de un elemento... O cuando entra a uno de sus hijos (porque para el navegador, "saliste" del elemento contenedor para pisar el hijo).

C. El bando "Inteligente": mouseenterymouseleave
Estos son mucho más limpios y amigables para interfaces comunes (como menús desplegables). NO tienen burbujas .

mouseenter: Se dispara únicamente cuando el ratón cruza el borde exterior del elemento padre. Si te mueves entre los hijos de adentro, no pasa nada, se queda tranquilo.

mouseleave: Se dispara únicamente cuando el mouse sale por completo del borde exterior del elemento padre.

2. La gran diferencia: mouseovervsmouseenterImagina que tienes una caja grande ( #padre) y adentro hay un texto ( #hijo).Si usas mouseenter: Pasas el mouse desde afuera hacia adentro de la caja$\rightarrow$Se dispara 1 vez . Te mueves encima del texto de adentro$\rightarrow$ No pasa nada .Si usas mouseover: Pasas el mouse desde afuera hacia la caja$\rightarrow$Se dispara 1 vez . Te mueves encima del texto de adentro$\rightarrow$ ¡Se dispara otra vez! (Porque el evento flotó desde el hijo hacia el padre).

3. Propiedades clave: event.targetyevent.relatedTargetPara los eventos de entrada y salida, JavaScript te da dos herramientas para saber exactamente de dónde viene y hacia dónde va el mouse:target: El elemento exacto que está bajo el mouse en este momento.relatedTarget: El elemento del que venía el mouse (en mouseover) o el elemento hacia el cual va el mouse (en mouseout).

*/

// Elementos del bando OVER / OUT
const cajaOver = document.getElementById('caja-over');
const countOver = document.getElementById('count-over');
let numOver = 0;

cajaOver.addEventListener('mouseover', () => {
  numOver++;
  countOver.textContent = numOver;
});

// Elementos del bando ENTER / LEAVE
const cajaEnter = document.getElementById('caja-enter');
const countEnter = document.getElementById('count-enter');
let numEnter = 0;

cajaEnter.addEventListener('mouseenter', () => {
  numEnter++;
  countEnter.textContent = numEnter;
});

/*
Evento	¿Cuándo ocurre?
mousemove	Mientras el mouse se mueve
mouseover	Cuando el cursor entra a un elemento (o a un hijo)
mouseout	Cuando el cursor sale de un elemento (o entra/sale de un hijo)
mouseenter	Cuando el cursor entra por primera vez al elemento
mouseleave	Cuando el cursor sale completamente del elemento
*/

// 01 -- mousemove ¿Qué hace? Se ejecuta cada vez que el mouse se mueve.
element.addEventListener("mousemove", (e)=>{
  console.log(e.clientX);
});

/*
Imagina mover el mouse.
•
   •
      •
          •
             •
Cada pequeño movimiento dispara un evento.
Puede generar cientos de eventos por segundo.
*/

// 02 -- mouseover Ahora imagina.
/*
Fuera

↓

┌────────────────────┐

      Producto

     [ Comprar ]

└────────────────────┘

Cuando el cursor entra.

Se dispara.

mouseover

Hasta aquí parece igual que mouseenter.

Pero espera.

Ahora el cursor baja al botón.

Producto

↓

Comprar

También vuelve a ejecutarse.

¿Por qué?

Porque mouseover también considera los elementos hijos.

El recorrido sería:

DIV

↓

BUTTON

Y vuelve a dispararse.
*/


/*
1. Claridad
¿Qué problema resuelven estos eventos?

Imagina que tienes una tarjeta de producto en un e-commerce.

┌─────────────────────────────┐
│                             │
│      Laptop Gamer           │
│                             │
│      ⭐⭐⭐⭐⭐                 │
│                             │
│      [ Comprar ]            │
│                             │
└─────────────────────────────┘


Quieres saber cosas como:

¿El usuario entró a la tarjeta?
¿Se fue de la tarjeta?
¿Está moviendo el mouse dentro?
¿Entró al botón?
¿Salió del botón?

Para responder esas preguntas existen estos eventos.


Los cinco eventos
Evento	¿Qué detecta?
mousemove	El mouse se mueve
mouseover	El mouse entra a un elemento o a uno de sus hijos
mouseout	El mouse sale de un elemento o entra/sale de un hijo
mouseenter	El mouse entra al elemento (ignora los hijos)
mouseleave	El mouse sale completamente del elemento (ignora los hijos)
*/

// ================= mousemove - Se ejecuta cada vez que el cursor cambia de posición. ==================
card.addEventListener("mousemove", (event) => {

    console.log(event.clientX, event.clientY);

});

/*
Si mueves el mouse 1 milímetro...
Se ejecuta.
Otro milímetro...
Se vuelve a ejecutar.
Puede dispararse cientos de veces por segundo.
*/

// ================= mouseover  ==================
/*
<div id="container">
   <button id="btn">Clic here</button>
</div>
*/

const contenedor = document.querySelector("#container");

contenedor.addEventListener("mouseover", (e)=> {
    console.log("Dentro")
})

/*
Sucede que al momento de el mouse ingresar al div se aplicaria un mouseover, sin embargo, que pasa si da clic en el button, pasaria lo mismo (mouseover) debido a que esta fuente lo aplica tanto al padre como al hijo.

Fuera

↓

DIV

✓ mouseover

↓

BUTTON

✓ mouseover otra vez
*/


// ================= mouseout  ==================
/*
Es el contrario.
Supongamos que estás sobre el DIV.
Ahora bajas al botón.

El navegador interpreta que el cursor salió del DIV para entrar al BUTTON.
Entonces ocurre: mouseout

Aunque visualmente sigas dentro de la tarjeta.
Eso suele sorprender cuando empiezas a trabajar con estos eventos.
 */


// ================= mouseenter  ==================
// Este es mucho más simple. Solo ocurre cuando el cursor entra por primera vez al elemento.
/*
Fuera

↓

DIV

✓ mouseenter

Después bajas al botón.

DIV

↓

BUTTON

No ocurre nada.

Porque el cursor nunca salió del DIV.
*/

// ================= mouseleave  ==================
/*
Es el opuesto.

Solo ocurre cuando abandonas completamente el elemento.

BUTTON

↓

DIV

↓

Fuera

✓ mouseleave

Moverte entre los hijos no lo dispara.
*/

// ================= relatedTarget  ==================
/*
Cuando ocurre mouseover o mouseout, el objeto event incluye: event.relatedTarget

Esta propiedad representa el otro elemento involucrado en el movimiento del cursor.

Ejemplo:

Fuera

↓

DIV

En el mouseover del DIV:

event.target → el DIV (donde ocurrió el evento).
event.relatedTarget → el elemento desde el que venía el cursor (o null si venía de fuera de la ventana).

Otro ejemplo:

DIV

↓

BUTTON

En el mouseover del BUTTON:

event.target → BUTTON.
event.relatedTarget → DIV.

Y al salir del BUTTON hacia el DIV (mouseout del BUTTON):

event.target → BUTTON.
event.relatedTarget → DIV.

Esto permite saber exactamente de dónde viene y hacia dónde va el cursor.
*/

/*
mousemove
↓

"El cursor se está moviendo."

----------------------------

mouseover
↓

"Entré a este elemento... incluso si es un hijo."

----------------------------

mouseout
↓

"Salí de este elemento... incluso para entrar a un hijo."

----------------------------

mouseenter
↓

"Entré por primera vez al componente."

----------------------------

mouseleave
↓

"Salí completamente del componente."

*/















































