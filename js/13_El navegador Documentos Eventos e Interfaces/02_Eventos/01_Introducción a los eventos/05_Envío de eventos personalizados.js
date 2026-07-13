// Envío de eventos personalizados
/*
1. La Teoría: ¿Qué significa "Disparar un evento"?
Normalmente, el navegador genera los eventos. Si el usuario hace clic en un botón, el navegador genera un evento click.

Con dispatchEvent, tú te conviertes en el navegador. Puedes crear un evento artificialmente desde tu código y decirle a un elemento HTML: "Oye, haz de cuenta que te acaban de hacer clic" o "Inventé un nuevo evento llamado usuarioLogueado, ejecútalo ahora".


¿Para qué sirve esto en el mundo real?
Pruebas automatizadas (Testing): Crear scripts que simulen clics, escrituras o movimientos del mouse para verificar si tu página funciona bien.

Arquitectura de componentes (E-commerce, Menús, etc.): Si creas un carrito de compras interactivo, cuando el usuario agregue un producto, puedes disparar un evento personalizado llamado carrito-actualizado. Cualquier otra parte de la página (como el contador de la barra de navegación) puede "escuchar" ese evento y actualizarse automáticamente.

2. ¿Cómo se compone el código? (Paso a Paso)
Para lanzar un evento se necesitan dos pasos obligatorios:

Crear el evento usando un constructor (new Event o new CustomEvent).

Disparar el evento en un elemento del DOM usando .dispatchEvent(event).
 */

// Sintaxis basica: 
// 1. Creamos el evento
let miEvento = new Event("nombreDelEvento", {
  bubbles: true,      // ¿Debe subir por el árbol DOM (propagarse)? (Por defecto: false)
  cancelable: true    // ¿Se puede frenar con preventDefault()? (Por defecto: false)
});

// 2. Lo disparamos en algún elemento HTML
elementoHTML.dispatchEvent(miEvento);


/*
3. Los Tres Escenarios Clave (Con Código y Explicación)
Escenario A: Simular un evento nativo (Ej: Un clic automático)
Imagina que quieres que, al cargar la página, se simule un clic en un botón de manera automática.
*/

// Seleccionamos el botón
const boton = document.getElementById("miBoton");

// Escuchamos el evento normalmente
boton.addEventListener("click", () => {
  console.log("¡El botón recibió un clic!");
});

// SIMULACIÓN: Creamos y disparamos el clic desde JS
const eventoClick = new Event("click");
boton.dispatchEvent(eventoClick); // En la consola aparecerá: ¡El botón recibió un clic!

// Nota: Puedes usar event.isTrusted. Si es true, el clic lo dio un humano real; si es false, fue creado por código.

/*
Escenario B: Eventos personalizados con datos (CustomEvent)
Si inventas un evento que no existe en el navegador (por ejemplo, actualizarPuntaje), debes usar new CustomEvent. Este constructor te permite pasarle datos extras dentro de una propiedad obligatoria llamada detail.
*/

// Imaginemos un juego. Escuchamos el evento en el contenedor del perfil
const perfilUsuario = document.getElementById("perfil");

perfilUsuario.addEventListener("actualizarPuntaje", (event) => {
  // Los datos extras que envías viajan SIEMPRE dentro de event.detail
  console.log(`El usuario subió de nivel. Puntos nuevos: ${event.detail.puntos}`);
});

// Disparamos el evento personalizado con datos del juego
const miEventoJuego = new CustomEvent("actualizarPuntaje", {
  detail: { puntos: 1500, nivel: "Experto" } // Aquí pasas lo que quieras
});

perfilUsuario.dispatchEvent(miEventoJuego);

/*
Escenario C: Cancelar acciones con preventDefault()
Igual que puedes evitar que un formulario se envíe con e.preventDefault(), puedes hacer que tus propios eventos sean cancelables.
*/

function ocultarVentana() {
  const ventana = document.getElementById("modal");

  // Creamos el evento diciendo que SÍ es cancelable
  const eventoOcultar = new CustomEvent("antesDeOcultar", { cancelable: true });

  // Disparamos el evento. 
  // Si un addEventListener llama a e.preventDefault(), dispatchEvent devolverá FALSE
  if (!ventana.dispatchEvent(eventoOcultar)) {
    console.log("La acción de ocultar fue cancelada por el usuario.");
  } else {
    ventana.style.display = "none"; // Si nadie la canceló, se oculta
  }
}

// En otra parte del código, alguien escucha ese evento y decide frenarlo
document.getElementById("modal").addEventListener("antesDeOcultar", (e) => {
  let guardarCambios = confirm("¿Quieres salir sin guardar los cambios?");
  if (!guardarCambios) {
    e.preventDefault(); // Cancelamos el evento si dice que no
  }
});

/*
4. Un detalle súper importante: El comportamiento Sincrónico
Normalmente, JavaScript pone los eventos en una "lista de espera" (cola). Si haces clic mientras se ejecuta otra cosa, el clic espera.

Pero con dispatchEvent, el evento es sincrónico (inmediato). Mira este orden de ejecución:
*/

console.log("1. Inicio");

elemento.addEventListener("miEvento", () => {
  console.log("2. Evento ejecutándose");
});

elemento.dispatchEvent(new Event("miEvento")); // JavaScript se detiene aquí para ejecutar el evento

console.log("3. Fin");

/*
Resultado en consola: 1. Inicio -> 2. Evento ejecutándose -> 3. Fin.
El código no espera a llegar al final para procesar el evento; lo mete en medio de la ejecución actual.

Si alguna vez necesitas que espere a que todo termine antes de dispararse, simplemente envuélvelo en un setTimeout:
*/

setTimeout(() => {
  elemento.dispatchEvent(new Event("miEvento"));
}, 0);

/*
Resumen para recordar:
Use Event para cosas simples o simular el navegador (click, input).

Use CustomEvent cuando inventes el nombre del evento y quieras mandar datos dentro del objeto { detail: { ... } }.

Asegúrate de poner { bubbles: true } si quieres que el evento suba por el HTML y lo pueda capturar un elemento padre (como el document).
*/
































