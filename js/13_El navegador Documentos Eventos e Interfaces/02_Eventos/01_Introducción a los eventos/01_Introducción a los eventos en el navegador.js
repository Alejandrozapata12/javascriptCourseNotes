// Introducción a los eventos en el navegador
/*
Un evento es una señal de que algo ocurrió. Todos los nodos del DOM generan dichas señales (pero los eventos no están limitados sólo al DOM).

Aquí hay una lista con los eventos del DOM más utilizados, solo para echar un vistazo:

Eventos del mouse:

click – cuando el mouse hace click sobre un elemento (los dispositivos touch lo generan con un toque).
contextmenu – cuando el mouse hace click derecho sobre un elemento.
mouseover / mouseout – cuando el cursor del mouse ingresa/abandona un elemento.
mousedown / mouseup – cuando el botón del mouse es presionado/soltado sobre un elemento.
mousemove – cuando el mouse se mueve.
Eventos del teclado:

keydown / keyup – cuando se presiona/suelta una tecla.
Eventos del elemento form:

submit – cuando el visitante envía un <form>.
focus – cuando el visitante hace foco en un elemento, por ejemplo un <input>.
Eventos del documento:

DOMContentLoaded --cuando el HTML es cargado y procesado, el DOM está completamente construido
Eventos del CSS:

transitionend – cuando una animación CSS concluye.
*/

// =========== 1- Controladores de eventos ===========
/*
Para reaccionar a los eventos podemos asignar un handler (controlador) el cual es una función que se ejecuta en caso de un evento.
Los handlers son una forma de ejecutar código JavaScript en caso de acciones por parte del usuario.
Hay muchas maneras de asignar un handler. Vamos a verlas empezando por las más simples.
*/

// Atributo HTML
/*
Un handler puede ser establecido en el HTML con un atributo llamado on<event>.
Por ejemplo, para asignar un handler click a un input podemos usar onclick, como aquí
*/

// <input type="button" value="Haz click aquí" onclick="alert('¡Hola!')">

/*
Cuando el usuario hace click en el botón, se ejecuta el código JavaScript dentro del atributo onclick.
En este caso, se muestra una alerta con el mensaje "¡Hola!".
Aunque esta forma de asignar handlers es sencilla, no es la más recomendada, ya que mezcla el código HTML con el JavaScript, lo que puede dificultar el mantenimiento y la legibilidad del código.
Además, esta técnica solo permite asignar un handler por evento, lo que puede ser limitante en situaciones más complejas.
*/
/* >
  function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert("Conejo número " + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="¡Cuenta los conejos!">
*/

// =========== 2- Accediendo al elemento: this ===========
/*
El valor de this dentro de un handler es el elemento, el cual tiene el handler dentro.
En el siguiente código el button muestra su contenido usando this.innerHTML
<button onclick="alert(this.innerHTML)">Haz click en mí</button>
*/

// =========== 3- addEventListener ===========
/*
El problema fundamental de las formas ya mencionadas para asignar handlers es que no podemos asignar multiples handlers a un solo evento.

Digamos que una parte de nuestro código quiere resaltar un botón al hacer click, y otra quiere mostrar un mensaje en el mismo click.
Los desarrolladores de estándares de la web entendieron eso hace mucho tiempo y sugirieron una forma alternativa de administrar los handlers utilizando los métodos especiales addEventListener y removeEventListener, que no tienen este problema.
*/

// sintaxis: 
element.addEventListener(event, handler, [options]);

// event: el nombre del evento sin "on" (por ejemplo, "click", "mouseover", etc.)
// handler: la función que se ejecutará cuando ocurra el evento
// options: un objeto opcional que puede contener propiedades como "capture", "once", y "passive" para controlar el comportamiento del evento>
/*
once: si es true entonces el listener se remueve automáticamente después de activarlo.
capture: la fase en la que se controla el evento, que será cubierta en el capítulo Propagación y captura. Por razones históricas, options también puede ser false/true, lo que es igual a {capture: false/true}.
passive: si es true entonces el handler no llamará a preventDefault(), esto lo explicaremos más adelante en Acciones predeterminadas del navegador.
 */

// Para remover el handler, usa removeEventListener
// Sintaxis: 
element.removeEventListener(event, handler, [options]);


// =========== 4- Objeto del evento ===========
/*
Pero para manejar correctamente un evento necesitamos saber todavía más acerca de lo que está pasando. No solo si fue un “click” o un “teclazo”, sino ¿cuáles eran coordenadas del cursor, o qué tecla fue oprimida? Y así.

Cuando un evento ocurre, el navegador crea un objeto del evento, coloca los detalles dentro y los pasa como un argumento al handler.


<input type="button" value="¡Haz click en mí!" id="elem">

<script>
  elem.onclick = function(event) {
    // muestra el tipo de evento, el elemento y las coordenadas del click
    alert(event.type + " en el " + event.currentTarget);
    alert("Coordenadas: " + event.clientX + ":" + event.clientY);
  };
</script>


Algunas propiedades del objeto event:

event.type
Tipo de evento, en este caso fue "click".
event.currentTarget
Elemento que maneja el evento. Lo que es exactamente igual a this, a menos que this haya cambiado por ser el handler una función de flecha, o su this esté vinculado a otra cosa. event.currentTarget`siempre apunta al elemento.
event.clientX / event.clientY
Coordenadas del cursor relativas a la ventana, para eventos de cursor.
Hay más propiedades. Muchas de ellas dependen del tipo de evento: los eventos del teclado tienen un conjunto de propiedades, y las de cursor, otro. Los estudiaremos después, cuando lleguemos a los detalles de diferentes eventos.

*/

// =========== 5- Objetos handlers: handleEvent ===========
/*
Podemos asignar no solo una función, sino un objeto como handler del evento usando addEventListener. Cuando el evento ocurre, el método handleEvent es llamado.

Por ejemplo:

<button id="elem">Haz click en mí</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + " en " + event.currentTarget);
    }
  };

  elem.addEventListener('click', obj);
</script>
 */

// ************************* RESUMEN *************************
/*
Resumen
Hay tres formas de asignar handlers:

Atributos HTML: onclick="...".
Propiedades del DOM: elem.onclick = function.
Métodos: elem.addEventListener(event, handler[, phase]) para agregarlos ó removeEventListener para quitarlos.
Los atributos HTML se usan con moderación, porque JavaScript en medio de una etiqueta HTML luce un poco extraño y ajeno. Además no podemos escribir montones de código ahí.

Las propiedades del DOM son buenas para usar, pero no podemos asignar más de un handler a un evento en particular. En la mayoría de casos esta limitación no es apremiante.

La última forma es la más flexible, pero también es la más larga para escribir. Unos pocos eventos solo funcionan con ésta, por ejemplo transitionend y DOMContentLoaded (que veremos después). Además addEventListener soporta objetos como handlers de eventos. En este caso handleEvent es llamado en caso del evento.

No importa como asignes el handler, este obtiene un objeto como primer argumento. Este objeto contiene los detalles sobre lo que pasó.

*/



