// Eventos del Mouse
/*
1. La Teoría: Tipos de eventos del mouse
Los eventos del mouse se dividen principalmente en dos categorías: eventos de clic y eventos de movimiento.

Eventos de Clic:
click: Se dispara cuando se presiona y se suelta el botón izquierdo del mouse sobre un elemento.

contextmenu: Se dispara cuando se hace clic con el botón derecho del mouse (normalmente abre el menú contextual del navegador, pero puedes evitarlo con preventDefault()).

dblclick: Se dispara al hacer doble clic rápido.

Eventos de Movimiento y Posición:
mousedown: Se dispara en el instante exacto en que presionas el botón del mouse (antes de soltarlo).

mouseup: Se dispara en el instante en que sueltas el botón del mouse.

mousemove: Se dispara cada vez que el puntero del mouse se mueve un solo píxel sobre el elemento.

mouseover: Se dispara cuando el puntero del mouse entra en los límites de un elemento.

mouseout: Se dispara cuando el puntero del mouse sale de los límites de un elemento.

💡 Dato clave: Un click es en realidad la combinación consecutiva de un mousedown seguido de un mouseup. Si presionas el botón del mouse en un elemento y mueves el cursor afuera antes de soltarlo, el evento click no se disparará.

2. El Orden de los Eventos (Sincronía)Si haces un clic común y corriente, el navegador dispara múltiples eventos en un orden estricto. Por ejemplo, al hacer un clic normal, el orden es:mousedownmouseupclickSi haces doble clic (dblclick):mousedown -> mouseup -> clickmousedown -> mouseup -> clickdblclick3. Propiedades Clave del Objeto eventCuando escuchas un evento del mouse (por ejemplo, elemento.addEventListener('click', (e) => { ... })), el objeto del evento e viene cargado con información crucial:A. Las Coordenadas (¿Dónde ocurrió el clic?)Hay diferentes formas de medir la posición del mouse en la pantalla, y las más usadas son:clientX y clientY: Miden la posición del mouse respecto a la ventana visible del navegador (el viewport). No importa si has hecho scroll hacia abajo, el borde superior izquierdo de la pantalla siempre es el $(0,0)$.pageX y pageY: Miden la posición respecto a todo el documento HTML. Si haces scroll hacia abajo, pageY aumentará porque toma en cuenta la parte de la página que quedó arriba escondida.B. El Botón Presionado (event.button)Para los eventos mousedown y mouseup, puedes saber exactamente qué botón del mouse se presionó usando la propiedad event.button:0: Botón izquierdo (el principal).1: Botón de la rueda/medio.2: Botón derecho.C. Teclas Modificadoras (shiftKey, altKey, ctrlKey, metaKey)Puedes detectar si el usuario hizo clic mientras mantenía presionada una tecla del teclado:event.shiftKey: true si presionaba Shift.event.altKey: true si presionaba Alt.event.ctrlKey: true si presionaba Control.
*/

const zona = document.getElementById('zona-captura');
const txtClient = document.getElementById('client-coords');
const txtPage = document.getElementById('page-coords');
const txtBoton = document.getElementById('boton-click');

// 1. Detectar el movimiento del mouse
zona.addEventListener('mousemove', (event) => {
  txtClient.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
  txtPage.textContent = `X: ${event.pageX}, Y: ${event.pageY}`;
});

// 2. Detectar qué botón presionó (usando mousedown)
zona.addEventListener('mousedown', (event) => {
  let botonNombre = '';

  switch (event.button) {
    case 0: botonNombre = 'Izquierdo'; break;
    case 1: botonNombre = 'Central (Rueda)'; break;
    case 2: botonNombre = 'Derecho'; break;
  }

  txtBoton.textContent = botonNombre;
});

// 3. Modificar el comportamiento del botón derecho (contextmenu)
zona.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Evita que se abra el menú aburrido del navegador
  alert("¡Bloqueamos el menú contextual! Aquí puedes inventar tu propio menú.");
});


/*
Los eventos más importantes

Evento	          ¿Cuándo ocurre?         	                                    Uso más común
click	                  Clic izquierdo completo (presionar y soltar)	   Botones, enlaces
dblclick	            Doble clic	                                                        Editar elementos, abrir archivos
mousedown	      Cuando presionas el botón del mouse           	Comenzar un drag & drop
mouseup          	 Cuando sueltas el botón	                                Finalizar un drag & drop
contextmenu	     Clic derecho	                                                     Menús personalizados
*/

// Entendimiento: 


// ============== click - Es el evento más utilizado. ==============
/*
<button id="guardar">
    Guardar
</button>
*/

const boton = document.querySelector("#guardar");

boton.addEventListener("click", () => {
    console.log("Guardando.......")
})

/*
Usuario

↓

Click

↓

click

↓

Guardar
 */

// ============== dblclick - Ocurre cuando haces dos clics rápidamente. ==============
boton.addEventListener("dblclick", () => {

    console.log("Doble clic");

});

/*
Muy utilizado en:

Exploradores de archivos.
Hojas de cálculo.
Editores de texto.
*/

// ============== mousedown - Se ejecuta inmediatamente cuando presionas el botón. No espera a que lo sueltes.==============
boton.addEventListener("mousedown", () => {

    console.log("Presionando");

});

/*
Muy útil para:

Drag & Drop.
Juegos.
Dibujar.
*/

// ============== mouseup - Cuando sueltas el botón. Normalmente se combina con mousedown.==============
boton.addEventListener("mouseup", () => {

    console.log("Soltó");

});


// ============== contextmenu - Cuando haces clic derecho.==============
document.addEventListener("contextmenu",(event)=>{

    event.preventDefault();

    console.log("Mostrar menú personalizado");

});

/*
Así se crean los menús contextuales de aplicaciones como VS Code o Google Drive.
*/

//  ************************************************************ El objeto MouseEvent *****************************************************

/*
Todos estos eventos reciben un objeto llamado: event.
Pero realmente es un: MouseEvent Tiene muchísima información.
*/

// clientX- Posición horizontal del mouse dentro de la ventana.
console.log(event.clientX); 

/*
Ejemplo: 

0px

↓

-------------------------

             Mouse

-------------------------

1000px

Si el cursor está en 420 px.
event.clientX

vale : 420 px


clientY

Posición vertical.

console.log(event.clientY);

*/


// button - Indica qué botón fue presionado.
console.log(event.button);

/*
Devuelve.

Valor	Botón
0	Izquierdo
1	Central (rueda)
2	Derecho
*/

// Ejemplo
if(event.button === 2){
  console.log("Click derecho")
}

/*
ctrlKey

¿Se estaba presionando CTRL?

if(event.ctrlKey){

console.log("CTRL presionado");

}
shiftKey
event.shiftKey
altKey
event.altKey
metaKey

En Windows.

Tecla Windows

En Mac.

Command ⌘
*/

// Ejemplo CTRL + CLIC

boton.addEventListener("click",(e) => {

  if(e.ctrlKey){
    console.log("Abrir en otra pestaña")
  }
})


/*
SHIFT + Click

Muy usado para seleccionar varios elementos.

Como Windows Explorer.

ALT + Click

Algunas aplicaciones muestran información adicional.
*/

// Ejemplo

const card = document.querySelector(".card");

card.addEventListener("mousedown",(event)=>{

    console.log("Mouse presionado");

    console.log("Botón:",event.button);

});

card.addEventListener("mouseup",()=>{

    console.log("Mouse liberado");

});

card.addEventListener("click",()=>{

    console.log("Click completo");

});

card.addEventListener("dblclick",()=>{

    console.log("Doble click");

});

card.addEventListener("contextmenu",(event)=>{

    event.preventDefault();

    console.log("Menú personalizado");

});

